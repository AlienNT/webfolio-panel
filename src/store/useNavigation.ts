import { computed, reactive } from 'vue'
import { NavigationLink } from '@/vite-env'

interface NavigationState {
  navigationList: NavigationLink[]
}

const state: NavigationState = reactive({
  navigationList: [
    {
      _id: '1',
      path: '/auth',
      title: 'auth',
      label: 'auth'
    },
    {
      _id: '2',
      path: '/profile',
      title: 'profile',
      label: 'profile'
    },
    {
      _id: '3',
      path: '/skills',
      title: 'skills',
      label: 'skills'
    },
    {
      _id: '4',
      path: '/works',
      title: 'works',
      label: 'works'
    },
    {
      _id: '5',
      path: '/contacts',
      title: 'contacts',
      label: 'contacts'
    }
  ]
})

export function useNavigation() {
  const navigationList = computed((): NavigationLink[] => {
    return state.navigationList
  })

  return {
    navigationList
  }
}