import { computed, reactive } from 'vue'
import { getIndex } from '@/helpers'

const state = reactive({
  works: <Work[]>[]
})

export function useWorks() {
  const works = computed((): Work[] => {
    return state.works
  })
  const workGetter = (_id: Id) => computed((): Work | undefined => {
    return state.works.find(work => work._id === _id)
  })

  function setWorks(works: Work[]) {
    state.works = [...state.works, ...works]
  }

  function setWork(work: Work) {
    if (!state.works.length) {
      return state.works.push(work)
    }
    const index = getIndex<Work>(state.works, work, '_id')

    index > -1 ? state.works[index] = work : state.works.push(work)
  }

  async function fetchWorks() {
    return ''
  }

  return {
    works,
    workGetter,
    setWorks,
    setWork,
    fetchWorks
  }
}