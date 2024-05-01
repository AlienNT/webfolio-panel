<script setup lang="ts">

import PageTemplate from '@/templates/PageTemplate.vue'

import { onMounted } from 'vue'
import { useProfile } from '@/store/useProfile.ts'
import { useProfileRequest } from '@/api/requests/useProfileRequest.ts'

const { profile, setProfile } = useProfile()
const { fetchProfile } = useProfileRequest()


onMounted(() => {
  if (!profile.value || Object.keys(!profile.value)) {
    fetchProfile({}).request().then(res => {
      setProfile(res)
    })
  }
})
</script>

<template>
  <section class="section profile-section">
    <PageTemplate>
      <template v-slot:content>
        <div>
          profile page
        </div>
        {{profile}}
      </template>
    </PageTemplate>
  </section>
</template>

<style scoped lang="scss">

</style>