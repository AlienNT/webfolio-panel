<script setup lang="ts">

import PageTemplate from '@/templates/PageTemplate.vue'
import Loader from '@/components/UI/Loader.vue'

import { useContacts } from '@/store/useContacts.ts'
import { useContactsRequest } from '@/api/requests/useContactsRequest.ts'
import { onMounted } from 'vue'

const { fetchContacts } = useContactsRequest()
const { isLoad, request } = fetchContacts({})
const { contacts, setContacts } = useContacts()

onMounted(() => {
  if (!contacts.value.length) {
    request().then((res) => {
      setContacts(res)
    })
  }
})
</script>

<template>
  <section class="section contacts-section">
    <PageTemplate>
      <template v-slot:content>
        contacts
        <div v-if="contacts.length" class="contacts-list">
          {{ contacts }}
        </div>
        <Loader
          v-if="isLoad"
        />
      </template>
    </PageTemplate>
  </section>
</template>

<style scoped lang="scss">

</style>