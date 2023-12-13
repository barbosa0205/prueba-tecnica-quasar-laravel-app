<template lang="">
  <q-form class="q-px-md tw-max-w-lg tw-mx-auto">
    <title-primary>
      <p class="q-pb-lg q-pt-xl q-pl-md">Registrate</p>
    </title-primary>

    <div class="q-mb-lg">
      <display-errors :errors="signupErrors" field="name" />

      <q-input
        label="Tu Nombre"
        v-model="formData.name"
        :rules="[
          (val) => val.trim().length > 0 || 'este campo no debe estar vacio',
          (val) =>
            val.trim().length >= 6 ||
            'el nombre debe tener almenos 6 caracteres',
        ]"
      />
    </div>
    <div class="q-mb-lg">
      <display-errors :errors="signupErrors" field="email" />

      <q-input
        label="Correo Electronico"
        v-model="formData.email"
        type="email"
        :rules="[
          (val) =>
            (val && val.trim().length > 0) ||
            'Por favor ingrese un email valido',
        ]"
      ></q-input>
    </div>

    <div class="q-mb-lg">
      <display-errors :errors="signupErrors" field="password" />

      <q-input
        class="q-mb-lg"
        label="Contraseña"
        v-model="formData.password"
        type="password"
        :rules="[
          (val) =>
            (val && val.length > 0) ||
            'Por favor ingrese una contraseña valida',
        ]"
      ></q-input>
    </div>

    <div class="column justify-center items-center">
      <span
        >No tienes una cuenta?
        <span
          class="cursor-pointer text-primary"
          @click="router.push('/auth/signin')"
          >Login</span
        ></span
      >

      <primary-button
        @click="register(formData)"
        label="registrate"
        class="q-mt-md tw-w-full tw-max-w-xs"
      />
    </div>
  </q-form>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "../../stores/userStore";
import { useAuthStore } from "src/stores/authStore";

import TitlePrimary from "../../components/TitlePrimary.vue";
import PrimaryButton from "src/components/PrimaryButton.vue";
import DisplayErrors from "../../components/DisplayErrors.vue";
import { useRouter } from "vue-router";

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const router = useRouter();
const authStore = useAuthStore();

const { signupErrors } = storeToRefs(authStore);

const { register } = authStore;
</script>
<style lang=""></style>
