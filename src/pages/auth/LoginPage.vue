<template lang="">
  <q-form class="q-px-md tw-max-w-lg tw-mx-auto">
    <title-primary>
      <p class="q-pb-lg q-pt-xl q-pl-md">Inicia Sesion</p>
    </title-primary>

    <div class="q-mb-lg">
      <display-errors :errors="signinErrors" field="email" />

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
      <display-errors :errors="signinErrors" field="password" />

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
          @click="router.push('/auth/signup')"
          >Registrate</span
        ></span
      >
      <primary-button
        @click="login(formData)"
        label="entra"
        class="q-mt-md tw-w-full tw-max-w-[200px]"
      />
    </div>
  </q-form>
</template>
<script setup>
import { onActivated, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "../../stores/userStore";
import { useAuthStore } from "src/stores/authStore";

import TitlePrimary from "../../components/TitlePrimary.vue";
import PrimaryButton from "src/components/PrimaryButton.vue";
import DisplayErrors from "../../components/DisplayErrors.vue";
import { useRouter } from "vue-router";

const formData = ref({
  email: "",
  password: "",
});

const router = useRouter();

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const authStore = useAuthStore();

const { signinErrors } = storeToRefs(authStore);

const { login } = authStore;
</script>
<style lang=""></style>
