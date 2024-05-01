import { useRequest } from '@/api/useRequest.ts'
import apiRoutes from '@/api/apiRoutes.ts'

export function useProfileRequest() {
  function fetchProfile({ isLoadDelay }: IsLoadDelay) {
    const { request, isLoad, cancel } = useRequest({ isLoadDelay })

    return {
      request: async (): Promise<Profile> => await request({
        url: apiRoutes.PROFILE.get.path,
        method: apiRoutes.PROFILE.get.method
      }),
      isLoad,
      cancel
    }
  }

  function updateProfile({ isLoadDelay }: IsLoadDelay) {
    const { request, isLoad, cancel } = useRequest({ isLoadDelay })

    return {
      request: async (profile: Profile) => await request({
        method: apiRoutes.PROFILE.update.method,
        url: apiRoutes.PROFILE.update.path,
        data: profile
      }),
      isLoad,
      cancel
    }
  }

  return {
    fetchProfile,
    updateProfile
  }
}