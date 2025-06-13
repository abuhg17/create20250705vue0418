<template>
  <h1>Article Page</h1>
  <h2>{{ articleID }}</h2>
  <h2>{{ articleNew }}</h2>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const articleID = ref(route.params.articleID);
let articleNew = ref();
if (articleID.value === "塗哥") {
  articleNew.value = "北農董事";
}
if (articleID.value === "鋒兄") {
  articleNew.value = "大家長";
}
</script>
