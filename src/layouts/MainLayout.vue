<template>
  <q-layout class="tw-bg-slate-100" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title> Quasar Blog </q-toolbar-title>

        <div>
          <div class="row items-center" v-if="user">
            <p class="q-mr-md tw-text-lg tw-cursor-default">{{ user.name }}</p>
            <q-icon
              @click="logout"
              class="cursor-pointer"
              name="logout"
              size="xs"
            />
          </div>
          <a v-else class="cursor-pointer" @click="router.push('/auth/signin')"
            >Login</a
          >
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, onMounted, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useUserStore } from "src/stores/userStore";
import { verifyTokenInLocalStorage } from "../utils";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/authStore";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];
const leftDrawerOpen = ref(false);

const router = useRouter();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const { getUser } = userStore;

const authStore = useAuthStore();

const { logout } = authStore;

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
onMounted(() => {
  verifyTokenInLocalStorage();
  getUser();
});
</script>
