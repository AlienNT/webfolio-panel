import axios, { AxiosError, AxiosProgressEvent } from 'axios'
import apiConfig from '@/configs/apiConfig.ts'
import apiRoutes from '@/api/apiRoutes.ts'
import { computed, reactive } from 'vue'

import { useAuth } from '@/store/useAuth.ts'
import { checkTokenExpire } from '@/helpers'


interface Request {
  method?: Method,
  url: string,
  data?: any
}

const { token, setToken } = useAuth()

export function useRequest({ isLoadDelay = 200 }: IsLoadDelay) {
  const state = reactive({
    abortController: <AbortController>{},
    uploadProgress: <AxiosProgressEvent>{},
    downloadProgress: <AxiosProgressEvent>{},
    isLoad: <boolean>false
  })

  const uploadProgress = computed((): AxiosProgressEvent => {
    return state.uploadProgress
  })
  const downloadProgress = computed((): AxiosProgressEvent => {
    return state.uploadProgress
  })
  const isLoad = computed((): boolean => {
    return state.isLoad
  })

  async function cancel() {
    state.abortController.abort()
  }

  async function apiRequest<T>({ method = 'GET', url, data }: Request): Promise<T> {
    const isTokenExpire: boolean = token.value ? checkTokenExpire(token.value) : true

    if (isTokenExpire && url !== apiRoutes.AUTH.login.path) {
      await request<RefreshTokenResponse>({
        method: apiRoutes.AUTH.refresh.method,
        url: apiRoutes.AUTH.refresh.path
      }).then((res) => {
        if (res?.accessToken) setToken(res.accessToken)
      })
    }
    return await request({ method, url, data })
  }

  async function request<T>(
    {
      method = 'GET',
      url,
      data
    }: Request): Promise<T> {
    state.isLoad = true

    return axios({
      method,
      url,
      data,
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      baseURL: apiConfig.API_URL,
      signal: state.abortController.signal,
      withCredentials: true,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => state.uploadProgress = progressEvent,
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => state.downloadProgress = progressEvent
    }).then((res) => {
      return res.data?.data

    }).catch((err: AxiosError) => {
      const status = err.response?.status
      if (status && status === 401) localStorage.removeItem('token')

      return err.response?.data

    }).finally(() => {
      setTimeout(() => state.isLoad = false, isLoadDelay)
    })
  }

  return {
    request: apiRequest,
    cancel,
    uploadProgress,
    downloadProgress,
    isLoad
  }
}