import { useRequest } from '@/api/useRequest.ts'
import apiRoutes from '@/api/apiRoutes.ts'

export function useContactsRequest() {
  function fetchContacts({ isLoadDelay }: IsLoadDelay) {
    const { request, isLoad, cancel } = useRequest({ isLoadDelay })

    return {
      request: async (): Promise<Contact[]> => await request({
        method: apiRoutes.CONTACTS.fetchAll.method,
        url: apiRoutes.CONTACTS.fetchAll.path
      }),
      isLoad,
      cancel
    }
  }

  function updateContact({ isLoadDelay }: IsLoadDelay) {
    const { request, isLoad, cancel } = useRequest({ isLoadDelay })

    return {
      request: async (contact: Contact): Promise<Skill[]> => await request({
        method: apiRoutes.CONTACTS.update.method,
        url: apiRoutes.CONTACTS.update.path(contact._id),
        data: contact
      }),
      isLoad,
      cancel
    }
  }

  return {
    fetchContacts,
    updateContact
  }
}