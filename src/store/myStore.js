import { defineStore } from "pinia";

export const useMyStore1 = defineStore("myStore", {
  state: () => ({
    data1: "20250705",
    data2: "0705",
    data3: "0418",
  }),
});

export const useMyStore2 = defineStore("myStore2", {
  state: () => ({
    data1: "20250619",
    data2: "考試通知書",
    data3: "No.2",
  }),
});

export const useMyStore3 = defineStore("myStore3", {
  state: () => ({
    data1: "20250615",
    data2: "紅鸞星動",
    data3: "No.1",
  }),
});
