<template lang="">


  <q-form class="q-px-md tw-max-w-lg tw-mx-auto">
  <title-primary >
    <p class="q-pb-lg q-pt-xl q-pl-md">Registrate</p>
  </title-primary>

<!-- :rules="[val => val && val.length > 0 || 'Por favor ingrese un nombre valido']" -->
  <q-input class="q-mb-lg" label="Tu Nombre" v-model="formData.name" :error="true" error-message="Custom ERror" />


  <q-input class="q-mb-lg" label="Correo Electronico" v-model="formData.email" type="email" :rules="[val => val && val.length > 0 || 'Por favor ingrese un email valido']"></q-input>

  <q-input class="q-mb-lg" label="Contraseña" v-model="formData.password" type="password" :rules="[val => val && val.length > 0 || 'Por favor ingrese una contraseña valida']"></q-input>

  <div class="row justify-center items-center">

    <q-btn class="tw-w-full tw-max-w-xs" label="Registrate" outline size="lg" padding="10px 20px" color="primary  " />
  </div>
</q-form>

</template>
<script setup>
  import { ref } from 'vue';
import {useUserStore} from '../../stores/userStore'
import TitlePrimary from '../../components/TitlePrimary.vue'
  const formData = ref({
    name: '',
    email: '',
    password: ''
  })

  const userStore = useUserStore()

  const {register} = userStore

</script>
<style lang="">

</style>
