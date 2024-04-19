import { useRequest } from '@/api/useRequest.ts'
import apiRoutes from '@/api/apiRoutes.ts'

export function useWorksRequest() {
  function fetchWorks({ isLoadDelay }: IsLoadDelay) {
    const { cancel, isLoad, request } = useRequest({ isLoadDelay })

    return {
      request: async (): Promise<Work[]> => await request({
        method: apiRoutes.WORKS.fetchAll.method,
        url: apiRoutes.WORKS.fetchAll.path
      }),
      cancel,
      isLoad
    }
  }

  function updateWork({ isLoadDelay }: IsLoadDelay) {
    const { cancel, isLoad, request } = useRequest({ isLoadDelay })

    return {
      request: async (work: Work): Promise<Work[]> => await request({
        method: apiRoutes.WORKS.update.method,
        url: apiRoutes.WORKS.update.path(work._id)
      }),
      cancel,
      isLoad
    }
  }

  return {
    fetchWorks,
    updateWork
  }
}