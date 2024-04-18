import axios, { AxiosError, AxiosProgressEvent } from 'axios'
import apiConfig from '@/configs/apiConfig.ts'
import { computed, reactive } from 'vue'

interface Request {
  method?: Method,
  url: string,
  data?: any
}

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

  async function request<T>(
    {
      method = 'GET',
      url,
      data
    }: Request): Promise<T> {
    state.isLoad = true

    return axios({
      baseURL: apiConfig.API_URL,
      signal: state.abortController.signal,
      method,
      url,
      data,
      onUploadProgress(progressEvent: AxiosProgressEvent) {
        state.uploadProgress = progressEvent
      },
      onDownloadProgress(progressEvent: AxiosProgressEvent) {
        state.downloadProgress = progressEvent
      }
    })
      .then(res => {
        return res.data?.data
      })
      .catch((err: AxiosError) => {
        console.log('err', err)
        const status = err.response?.status
        if (status && status === 401) {
          localStorage.removeItem('token')
        }
        throw new Error()
      })
      .finally(() => setTimeout(() => state.isLoad = false, isLoadDelay))
  }

  return {
    request,
    cancel,
    uploadProgress,
    downloadProgress,
    isLoad
  }
}