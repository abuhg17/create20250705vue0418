<template>
  <h1>About Page</h1>
</template>

<script setup>
import { ref } from "vue";
import MyComp2 from "@/components/MyComp2.vue";
const mytable = ref([
  {
    foodname: "百奇藍莓果粒優格棒",
    foodbrand: "格力高",
    foodstore: "統一超商",
    foodprice: "59",
    foodamount: "0",
    fooddate: "2025-00-00",
  },
  {
    foodname: "運動飲料",
    foodbrand: "舒跑",
    foodstore: "全家",
    foodprice: "29",
    foodamount: "0",
    fooddate: "2025-00-00",
  },
  {
    foodname: "日式串燒休閒丸子",
    foodbrand: "張君雅小妹妹",
    foodstore: "統一超商",
    foodprice: "25",
    foodamount: "3",
    fooddate: "2025-07-05",
  },
]);
</script>
