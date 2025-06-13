<template>
  <div class="my-price">
    <h2>
      <a v-if="pricehref" :href="pricehref" target="_blank" rel="noopener">
        <slot></slot>
      </a>
      <span v-else>
        <slot></slot>
      </span>
    </h2>
    <ul>
      <li v-for="(item, index) in priceHistory" :key="index">
        NT${{ item.price.toString().padStart(4, "*") }} | {{ item.date }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  priceHistory: {
    type: Array,
    required: true,
  },
  pricehref: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.my-price {
  margin-bottom: 1.5rem;
}
</style>
