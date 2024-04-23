<script setup lang="ts">
import Image from '@/components/UI/Image.vue'
import { useSkillRequests } from '@/api/requests/useSkillRequests.ts'
import { useSkills } from '@/store/useSkills.ts'

interface SkillProps {
  skill: Skill
}

const props = defineProps<SkillProps>()

const { updateSkill } = useSkillRequests()
const { setSkill } = useSkills()
const { request } = updateSkill({})

async function onClick() {
  await request({ ...props.skill, active: !props.skill.active }).then(res => {
    console.log('res', res)
    setSkill(res)
  })
}
</script>

<template>
  <li
    class="skills-list-item"
    :title="skill.title"
    :class="skill.active && 'active'"
    @click="onClick"
  >
    <Image
      class="skill-image"
      :src="skill.image"
    />
  </li>
</template>

<style scoped lang="scss">
$activeSkillColor: rgba(151, 185, 243, 0.2);
.skills-list-item {
  flex: 0 0 100px;
  border-width: 3px;
  border-radius: 15px;
  border-color: #b0b0b0;
  border-style: solid;
  padding: 5px;
  cursor: pointer;
  transition: .2s ease;


  &.active {
    background: lighten($activeSkillColor, 15%);
    border-color: $activeSkillColor;
  }

  &:hover {
    border-style: dashed;
  }
}
</style>