import axios, { AxiosProgressEvent } from 'axios'
import apiConfig from '@/configs/apiConfig.ts'
import { computed, reactive } from 'vue'

interface Request {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: string,
  data?: any
}

export function useRequest() {
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

  async function request(
    {
      method = 'GET',
      url,
      data
    }: Request) {
    state.isLoad = true

    return axios({
      baseURL: apiConfig.API_URL,
      signal: state.abortController.signal,
      method,
      url,
      data
    }).finally(() => state.isLoad = false)
  }

  return {
    request,
    cancel,
    uploadProgress,
    downloadProgress,
    isLoad
  }
}