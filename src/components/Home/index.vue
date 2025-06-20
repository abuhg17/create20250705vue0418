<template>
  <h1>Home Page</h1>
  <Quicksort :arr="arr" />
</template>
<script setup>
import Quicksort from "@/components/Quicksort.vue";
import { ref } from "vue";
const arr = ref([
  3, 5, 0, 6, 2, 1, 4, 111, 222, 333, 3333, 1111, 2222, 11, 33, 22,
]);
</script>
