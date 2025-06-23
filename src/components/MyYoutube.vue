<template>
  <div>
    <h2>YouTube 影片查詢</h2>
    <input v-model="myid" placeholder="輸入影片 ID" />
    <button @click="getVideoInfo">查詢</button>

    <div v-if="info">
      <img
        :src="thumbnailUrl"
        @error="useFallback"
        :alt="info.title"
        style="
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin-bottom: 1em;
        "
      />

      <h3>{{ info.title }}</h3>
      <p>頻道：{{ info.channel }}</p>
      <p>觀看數：{{ info.views }}</p>
      <p>按讚數：{{ info.likes }}</p>
      <p>發布時間：{{ info.published }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// ✅ 可變動的影片 ID
const myid = ref("hnl-44mXdKI");

// ✅ 放你自己的 API 金鑰（注意不要公開）
const myapikey = "AIzaSyARxObGJgbWeVUC2Jhal6ic-XbdJUfI-h0";

// 資訊儲存
const info = ref(null);

// 預設縮圖 URL（maxres 預設）
const thumbnailUrl = ref(
  `https://img.youtube.com/vi/${myid.value}/maxresdefault.jpg`
);

// 當 maxres 無圖 → fallback
const useFallback = () => {
  thumbnailUrl.value = `https://img.youtube.com/vi/${myid.value}/hqdefault.jpg`;
};

// 呼叫 API 並解析
const getVideoInfo = async () => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${myid.value}&key=${myapikey}`;

  try {
    const res = await axios.get(url);
    const item = res.data.items[0];

    if (item) {
      info.value = {
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        views: item.statistics.viewCount,
        likes: item.statistics.likeCount,
        published: item.snippet.publishedAt,
      };

      // 更新縮圖網址
      thumbnailUrl.value = `https://img.youtube.com/vi/${myid.value}/maxresdefault.jpg`;
    } else {
      info.value = null;
      alert("查無影片資料");
    }
  } catch (err) {
    console.error("API 錯誤：", err);
    alert("發生錯誤，請檢查 API 金鑰與影片 ID");
  }
};
</script>
