<script setup lang="ts">

import PageTemplate from '@/templates/PageTemplate.vue'
import AuthForm from '@/components/auth/AuthForm.vue'

</script>

<template>
  <section class="section">
    <PageTemplate>
      <template v-slot:content>
        <AuthForm />
      </template>
    </PageTemplate>
  </section>
</template>