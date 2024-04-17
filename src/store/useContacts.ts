import { computed, reactive } from 'vue'
import { getIndex } from '@/helpers'

const state = reactive({
  contacts: <Contact[]>[]
})

export function useContacts() {
  const contacts = computed(() => {
    return state.contacts
  })
  const contactGetter = (_id: Id) => computed(() => {
    return state.contacts.find(contact => contact._id === _id)
  })

  function setContacts(contacts: Contact[]) {
    state.contacts = contacts
  }

  function setContact(contact: Contact) {
    if (!state.contacts.length) {
      return state.contacts.push(contact)
    }

    const index = getIndex(state.contacts, contact, '_id')

    index > -1 ? state.contacts[index] = contact : state.contacts.push(contact)
  }

  async function fetchContacts() {
    return ''
  }

  return {
    contacts,
    contactGetter,
    setContacts,
    setContact,
    fetchContacts
  }
}