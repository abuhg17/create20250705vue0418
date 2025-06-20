<!-- @/components/MyComp2.vue -->
<template>
  <ul>
    <li v-for="(entry, index) in arr" :key="index">
      <template v-if="typeof entry === 'string'">
        {{ entry }}
      </template>
      <template v-else-if="typeof entry === 'object'">
        {{ entry.item?.myitem }} - {{ entry.num }}
      </template>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(["arr"]);
</script>
