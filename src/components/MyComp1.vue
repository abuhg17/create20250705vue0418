<template>
  <h2>MyComp1</h2>
  <slot></slot>
  <img
    src="https://placebeard.it/100/100"
    alt="placebeard.it"
    title="placebeard.it"
  />
  <table>
    <thead>
      <tr>
        <th>th1</th>
        <th>th2</th>
        <th>th3</th>
        <th>th4</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in formDataList" :key="index">
        <td>{{ item.td1 }}</td>
        <td>{{ item.td2 }}</td>
        <td>{{ item.td3 }}</td>
        <td>{{ item.td4 }}</td>
      </tr>
    </tbody>
  </table>
  <p><input type="text" v-model="formData.td1" /></p>
  <p><input type="text" v-model="formData.td2" /></p>
  <p><input type="text" v-model="formData.td3" /></p>
  <p><input type="text" v-model="formData.td4" /></p>
  <button type="submit" @click="SubmitForm">submit</button>
  <p>
    <transition>
      <div v-if="data.display">
        <input type="text" disabled value="你好!" />
      </div>
    </transition>
    <button @click="data.display = !data.display">display</button>
  </p>
</template>

<script setup>
import { ref } from "vue";
import { useMyStore1 } from "@/store/myStore";
const store = useMyStore1();
const formData = ref({
  td1: "",
  td2: "",
  td3: "",
  td4: "",
});
const formDataList = ref([]);
function SubmitForm() {
  const { td1, td2, td3, td4 } = formData.value;
  if (!td1 && !td2 && !td3 && !td4) return; // 全部空白不送出
  formDataList.value.push({ td1, td2, td3, td4 });
  formData.value = { td1: "", td2: "", td3: "", td4: "" };
}
const data = ref({
  display: false,
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid black;
  padding: 6px 12px;
  text-align: left;
}
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>
