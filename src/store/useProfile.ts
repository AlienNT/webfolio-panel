import { computed, reactive, readonly } from 'vue'

const state = reactive({
  profile: <Profile>{}
})

export function useProfile() {
  const profile = computed(() => {
    return readonly(state.profile)
  })

  function setProfile(profile: Profile) {
    state.profile = profile
  }

  return {
    profile,
    setProfile
  }
}