import { api } from "src/boot/axios";
import router from ".";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "posts/create",
        name: "post.create",
        component: () => import("pages/posts/CreatePostPage.vue"),
      },
    ],
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: () => import("pages/auth/RegisterPage.vue"),
  },
  {
    path: "/auth/signin",
    name: "signin",
    component: () => import("pages/auth/LoginPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
