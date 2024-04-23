<script setup lang="ts">

import { reactive } from 'vue'
import { useAuthRequest } from '@/api/requests/useAuthRequest.ts'
import { useAuth } from '@/store/useAuth.ts'

import VField from '@/components/UI/VField.vue'
import Loader from '@/components/UI/Loader.vue'
import AuthButton from '@/components/auth/AuthButton.vue'

const state = reactive({
  isError: false,
  status: <number | null>null,
  errors: [],
  formFields: <AuthForm>{
    password: '',
    email: ''
  }
})
const { login } = useAuthRequest({})
const { setToken } = useAuth()
const { isLoad, request } = login()

async function submitHandler() {
  request(state.formFields).then((res: ApiRequest) => {
    state.status = res.status
    state.isError = res.status >= 300
    state.errors = res?.errors || []

    const token = res?.accessToken
    if (token) setToken(token)
  })
}
</script>

<template>
  <form
    class="form"
    @submit.prevent="submitHandler"
  >
    <VField
      :value="state.formFields.email"
      type="email"
      placeholder="email"
      @on-input="(e: string) => state.formFields.email = e"
    />
    <VField
      :value="state.formFields.password"
      type="password"
      @on-input="(e: string) => state.formFields.password = e"
    />
    <AuthButton
      class="login-button"
      label="login"
      title="login"
      type="submit"
      @on-click="submitHandler"
    />
    <transition name="fade" appear>
      <div
        v-if="isLoad"
        class="loader-wrapper"
      >
        <Loader />
      </div>
    </transition>
    <transition>
      <div
        v-if="state.errors?.[0]"
        class="error"
      >
        {{ state.errors[0] }}
      </div>
    </transition>
  </form>
</template>

<style scoped lang="scss">
@import "../../assets/css/animations";

.form {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: auto;
  background: #2b2d30;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 56, 61, 0.68);
  backdrop-filter: blur(8px);
}

.error {
  color: red;
  text-align: center;
}
.login-button {
  flex: none;
  width: fit-content;
  justify-self: flex-end;
  align-self: flex-end;
}
</style>