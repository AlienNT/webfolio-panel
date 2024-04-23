<script setup lang="ts">
import ContactsListItem from '@/components/contacts/ContactsListItem.vue'

interface ContactsProps {
  contacts: Contact[]
}

defineProps<ContactsProps>()
</script>
<template>
  <ul class="contacts-list">
    <ContactsListItem
      v-for="contact in contacts"
      :key="contact._id"
      :contact="contact"
    />
  </ul>
</template>

<style scoped lang="scss">
.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>