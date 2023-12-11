<template lang="">

<title-primary>
  Registrate
</title-primary>

<q-form class="q-pa-md tw-max-w-xl tw-mx-auto">

<!-- :rules="[val => val && val.length > 0 || 'Por favor ingrese un nombre valido']" -->
  <q-input label="Tu Nombre" v-model="formData.name" :error="true" error-message="Custom ERror" />


  <q-input label="Correo Electronico" v-model="formData.email" type="email" :rules="[val => val && val.length > 0 || 'Por favor ingrese un email valido']"></q-input>

  <q-input label="Contraseña" v-model="formData.password" type="password" :rules="[val => val && val.length > 0 || 'Por favor ingrese una contraseña valida']"></q-input>

  <div class="row justify-center items-center">
    <q-btn class="" label="Registrate" outline size="lg" padding="10px 20px" color="primary  " />
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
