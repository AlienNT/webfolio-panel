import { computed, reactive } from 'vue'
import { getIndex } from '@/helpers'

const state = reactive({
  skills: <Skill[]>[]
})

export function useSkills() {
  const skills = computed((): Skill[] => {
    return state.skills
  })
  const skillGetter = (_id: Id) => computed((): Skill | undefined => {
    return state.skills.find(skill => skill._id === _id)
  })

  function setSkills(skills: Skill[]) {
    state.skills = skills
  }

  function setSkill(skill: Skill) {
    if (!state.skills.length) {
      return state.skills.push(skill)
    }
    const index = getIndex(state.skills, skill, '_id')

    if (index > -1) {
      state.skills[index] = skill
    }
  }

  return {
    skills,
    skillGetter,
    setSkills,
    setSkill,
  }
}