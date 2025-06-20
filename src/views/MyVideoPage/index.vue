<template>
  <h1>My Video Page</h1>
  <MyVideo :mysource="mysource" />
</template>
<script setup>
import MyVideo from "@/components/MyVideo.vue";
import { ref } from "vue";
const mysource = ref([
  {
    title:
      "いきづらい部！「What is my LIFE_」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】",
    src: "/MyVideo/いきづらい部！「What is my LIFE_」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】.mp4",
    img: "/MyVideoImage/いきづらい部！「What is my LIFE_」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】.webp",
  },
  {
    title:
      "いきづらい部！ 高橋ポルカ Solo Song「浅草Guilty Girlの歌」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】",
    src: "/MyVideo/いきづらい部！ 高橋ポルカ Solo Song「浅草Guilty Girlの歌」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】.mp4",
    img: "/MyVideoImage/いきづらい部！ 高橋ポルカ Solo Song「浅草Guilty Girlの歌」リリックビデオ【イキヅライブ！ LOVELIVE! BLUEBIRD】.webp",
  },
]);
</script>
