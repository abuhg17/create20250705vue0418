import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home/index.vue";
import Price from "@/components/Price/index.vue";
import Vue3 from "@/components/Vue3/index.vue";
import About from "@/components/About/index.vue";
import Articles from "@/components/Articles/index.vue";
import Article from "@/components/Article/index.vue";
import NotFound from "@/components/404.vue";
import MyFirebaseFood from "@/components/MyFirebaseFood.vue";
import MyLearn from "@/components/MyLearn.vue";
import MyVideoPage from "@/views/MyVideoPage/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/mylearn", component: MyLearn },
    { path: "/myFirebaseFood", component: MyFirebaseFood },
    { path: "/price", component: Price },
    { path: "/vue3", component: Vue3 },
    { path: "/articles", component: Articles },
    { path: "/articles/:articleID", component: Article },
    { path: "/about", component: About },
    { path: "/:noFound(.*)", component: NotFound },
    { path: "/myvideopage", component: MyVideoPage },
  ],
  linkActiveClass: "active",
});
export default router;
