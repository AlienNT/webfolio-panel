import { useRequest } from '@/api/useRequest.ts'
import apiRoutes from '@/api/apiRoutes.ts'

export function useSkillRequests() {
  function fetchSkills({ isLoadDelay }: IsLoadDelay) {
    const {
      request,
      isLoad,
      downloadProgress
    } = useRequest({ isLoadDelay })
    return {
      request: async () => await request<Skill[]>({ url: apiRoutes.SKILLS.fetchAll.path }),
      isLoad,
      downloadProgress
    }
  }

  function updateSkill({ isLoadDelay }: IsLoadDelay) {
    const {
      request,
      isLoad
    } = useRequest({ isLoadDelay })
    return {
      request: async (skill: Skill) => await request<Skill>({
        method: apiRoutes.SKILLS.update.method,
        url: apiRoutes.SKILLS.update.path(skill._id),
        data: skill
      }),
      isLoad
    }
  }

  return {
    fetchSkills,
    updateSkill
  }
}