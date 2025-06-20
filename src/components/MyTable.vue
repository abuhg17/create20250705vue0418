<template>
  <h1><slot>預設標題</slot></h1>
  <table border="1">
    <thead>
      <tr>
        <th v-for="key in columns" :key="key">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in mytable" :key="index">
        <td v-for="key in columns" :key="key">{{ row[key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    mytable: {
      type: Array,
      required: true,
    },
  },
  computed: {
    columns() {
      return this.mytable.length > 0 ? Object.keys(this.mytable[0]) : [];
    },
  },
};
</script>
