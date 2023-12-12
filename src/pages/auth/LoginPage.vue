<template lang="">


  <q-form class="q-px-md tw-max-w-lg tw-mx-auto">
  <title-primary >
    <p class="q-pb-lg q-pt-xl q-pl-md">Inicia Sesion</p>
  </title-primary>

<div class="q-mb-lg" >
  <display-errors :errors="signupErrors" field="email"/>

  <q-input label="Correo Electronico" v-model="formData.email" type="email" :rules="[val => val && val.trim().length > 0 || 'Por favor ingrese un email valido']"></q-input>
</div>

<div class="q-mb-lg" >
  <display-errors :errors="signupErrors" field="password"/>

    <q-input class="q-mb-lg" label="Contraseña" v-model="formData.password" type="password" :rules="[val => val && val.length > 0 || 'Por favor ingrese una contraseña valida']"></q-input>
</div>

  <div class="row justify-center items-center">

    <q-btn @click="login(formData)" class="tw-w-full tw-max-w-xs" label="Entra" outline size="lg" padding="10px 20px" color="primary  " />
  </div>
</q-form>

</template>
<script setup>
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';

  import {useUserStore} from '../../stores/userStore'
  import { useAuthStore } from 'src/stores/authStore';

  import TitlePrimary from '../../components/TitlePrimary.vue'
  import DisplayErrors from '../../components/DisplayErrors.vue'

  const formData = ref({
    name: '',
    email: '',
    password: ''
  })


  const authStore = useAuthStore()

  const {signinErrors} = storeToRefs(authStore)

  const {login} = authStore


</script>
<style lang="">

</style>
