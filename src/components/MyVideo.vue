<template>
  <div v-for="(item, index) in mysource" :key="index" class="video-item">
    <h3>{{ item.title }}</h3>
    <video controls :poster="item.img" :src="item.src" width="333"></video>
  </div>
</template>

<script setup>
defineProps({
  mysource: {
    type: Array,
    required: true,
  },
});
</script>
