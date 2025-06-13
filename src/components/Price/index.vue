<template>
  <h1>Price</h1>
  <MyPrice
    :priceHistory="priceHistory1"
    pricehref="https://www.udemy.com/course/python-django-the-practical-guide/"
    >Python Django - The Practical Guide</MyPrice
  >
  <MyPrice
    :priceHistory="priceHistory2"
    pricehref="https://www.udemy.com/course/docker-kubernetes-the-practical-guide"
    >Docker & Kubernetes: The Practical Guide [2025 Edition]</MyPrice
  >
  <MyPrice
    :priceHistory="priceHistory3"
    pricehref="https://www.udemy.com/course/vue-js-complete-guide/"
    >超Vue.js 完全ガイド2025 (Vue Router, Pinia含む)</MyPrice
  >
  <MyPrice
    :priceHistory="priceHistory4"
    pricehref="https://www.udemy.com/course/javascript-complete/"
    >超JavaScript 完全ガイド 2025</MyPrice
  >
  <MyPrice
    :priceHistory="priceHistory5"
    pricehref="https://www.udemy.com/course/data-structures-and-algorithms-bootcamp-in-python/"
    >The Complete Data Structures and Algorithms Course in Python</MyPrice
  >
  <MyPrice
    :priceHistory="priceHistory6"
    pricehref="https://www.udemy.com/course/java-data-structures-and-algorithms-masterclass/"
    >Java Data Structures and Algorithms Masterclass</MyPrice
  >
</template>

<script setup>
import MyPrice from "@/components/MyPrice.vue";
const priceHistory1 = [
  {
    price: 610,
    date: "2025-06-12",
  },
  {
    price: 880,
    date: "2025-06-13",
  },
];
const priceHistory2 = [
  {
    price: 610,
    date: "2025-06-12",
  },
  {
    price: 5990,
    date: "2025-06-13",
  },
];
const priceHistory3 = [
  {
    price: 660,
    date: "2025-06-12",
  },
  {
    price: 5990,
    date: "2025-06-13",
  },
];
const priceHistory4 = [
  {
    price: 610,
    date: "2025-06-12",
  },
  {
    price: 5990,
    date: "2025-06-13",
  },
];
const priceHistory5 = [
  {
    price: 610,
    date: "2025-06-12",
  },
  {
    price: 5990,
    date: "2025-06-13",
  },
];
const priceHistory6 = [
  {
    price: 610,
    date: "2025-06-12",
  },
  {
    price: 5990,
    date: "2025-06-13",
  },
];
</script>
