<template>
  <button class="btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const [message, emitMessageUpdate] = defineModel("message", {
  type: String,
  default: "",
});

function handleClick() {
  emitMessageUpdate("我被點擊了");
}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>
