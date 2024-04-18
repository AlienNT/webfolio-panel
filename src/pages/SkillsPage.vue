<script setup lang="ts">

import PageTemplate from '@/templates/PageTemplate.vue'
import SkillsList from '@/components/skills/SkillsList.vue'

import { useSkills } from '@/store/useSkills.ts'
import { onMounted } from 'vue'
import { useSkillRequests } from '@/api/requests/useSkillRequests.ts'

const { skills, setSkills } = useSkills()
const { fetchSkills } = useSkillRequests()
const { request } = fetchSkills({})

onMounted(() => {
  if (!skills.value.length) {
    request().then((res) => {
      setSkills(res)
    })
  }
})
</script>

<template>
  <section class="section skills-section">
    <PageTemplate>
      <template v-slot:content>
        <SkillsList
          :skills="skills"
        />
      </template>
    </PageTemplate>
  </section>
</template>

<style scoped lang="scss">

</style>