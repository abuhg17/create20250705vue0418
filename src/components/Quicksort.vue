<template>
  <h1>Quicksort</h1>
  <p>排序之前:{{ arr }}</p>
  <p>排序之後:{{ newarr }}</p>
</template>
<script setup>
const props = defineProps({
  arr: {
    type: Array,
    required: true,
  },
});
import { ref } from "vue";
const newarr = ref(props.arr);
const quicksort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
};
newarr.value = quicksort(props.arr);
</script>
<style scoped></style>
