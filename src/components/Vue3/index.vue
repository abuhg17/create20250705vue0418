<template>
  <h1>Vue3 Page</h1>
  <p>{{ momentStr }}</p>
  倒數{{ momentStr202507050418 }}天
  <MyComp1> 這是MyComp1 </MyComp1>
</template>
<script setup>
import MyComp1 from "@/components/MyComp1.vue";
import { ref } from "vue";
import moment from "moment";
const momentStr = ref();
const momentStr202507050418 = ref();
setInterval(() => {
  momentStr.value = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);
momentStr202507050418.value = moment("2025-07-05 04:18:00").diff(
  moment(),
  "days"
);
</script>
