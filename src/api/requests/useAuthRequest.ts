import { useRequest } from '@/api/useRequest.ts'
import apiRoutes from '@/api/apiRoutes.ts'


export function useAuthRequest({ isLoadDelay }: IsLoadDelay) {
  function login() {
    const { request, isLoad } = useRequest({ isLoadDelay })
    return {
      request: async (formData: AuthForm):Promise<ApiRequest> => await request({
        method: apiRoutes.AUTH.login.method,
        url: apiRoutes.AUTH.login.path,
        data: formData
      }),
      isLoad
    }

  }

  function logout() {
    const { request, isLoad } = useRequest({ isLoadDelay })
    return {
      request: async () => await request({
        method: apiRoutes.AUTH.logout.method,
        url: apiRoutes.AUTH.logout.path
      }),
      isLoad
    }
  }

  return {
    login,
    logout
  }
}