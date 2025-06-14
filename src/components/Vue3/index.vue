<template>
  <h1>Vue3 Page</h1>
  <MyComp1> 這是MyComp1 </MyComp1>
  {{ moment().format("MMMM Do YYYY, h:mm:ss a") }}
</template>
<script setup>
import MyComp1 from "@/components/MyComp1.vue";
</script>
