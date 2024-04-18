<script setup lang="ts">


import SkillsListItem from '@/components/skills/SkillsListItem.vue'

interface SkillsProps {
  skills: Skill[]
}

defineProps<SkillsProps>()
</script>

<template>
  <ul class="skills-list">
    <SkillsListItem
      v-for="skill in skills"
      :key="skill._id"
      :skill="skill"
    />
  </ul>
</template>

<style scoped lang="scss">
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>