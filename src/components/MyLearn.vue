<template>
  <h1>My Learn Page</h1>
  <div v-for="item in learnList">
    <div>
      <a :href="item.href" target="_blank" rel="noopener">{{ item.title }}</a>
    </div>
    <button @click="item.isShow = !item.isShow" class="button is-info is-light">
      show
    </button>
    <transition>
      <div v-if="item.isShow">
        <div v-for="list in item.tech">
          <p>
            {{ list }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
const learnList = ref([
  {
    title: "The complete VUE JS course",
    href: "https://www.udemy.com/course/the-complete-vue-js-course/",
    tech: [
      "2024-02-15",
      "Vue 3",
      "Animate.css , 第 3 節： Practice project One , 24. Adding names to the list",
      "Vee-Validate , 第 5 節： Forms",
      "Yup , Schema validation,第 5 節： Forms",
      "Vue Router , 第 8 節： Working with Routes",
      "Firebase , 第 9 節： Database and Authentication,",
      "Pinia , 第 10 節： State management with Pinia",
      "vue-toastification",
      "Vuetify",
      "2021-11-11",
      "JSON server",
      "placebeard.it",
      "vue3-carousel",
      "vue-masonry"
    ],
    isShow: false,
  },
  {
    title: "我的學習",
    href: "https://www.udemy.com/home/my-courses/learning/",
    tech: [
      "Complete React, Next.js & TypeScript Projects Course 2025",
      "100 Days of Code: JavaScript Data Structures and Algorithms",
      "Ionic 8+: Build Food Delivery App from Beginner to Advanced",
      "Introduction to Computer Networks for Non-Techies",
      "Svelte & SvelteKit: The Complete Guide [2025 Update]",
      "Remix.js - The Practical Guide",
      "Pinia , 第 10 節： State management with Pinia",
    ],
    isShow: false,
  },
]);
</script>
<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>
