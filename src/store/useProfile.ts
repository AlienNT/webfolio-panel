import { computed, reactive } from 'vue'

interface ProfileState {
  profile: Profile | null
}

const state: ProfileState = reactive({
  profile: null
})

export function useProfile() {
  const profile = computed((): Profile | null => {
    return state.profile
  })

  function setProfile (profile: Profile) {
    state.profile = profile
  }

  async function fetchProfile() {
    return ''
  }
  return {
    profile,
    setProfile,
    fetchProfile
  }
}