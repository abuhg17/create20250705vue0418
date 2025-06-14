<template>
  <h1>My Firebase Food Page</h1>
  <button @click="ClearForm()" class="outline">clear</button>
  <button class="outline secondary">
    <a :href="`#${formData.foodname}`"> Go to {{ formData.foodname }}</a>
  </button>
  <form @submit.prevent="SubmitForm">
    foodname:<input
      type="text"
      placeholder="foodname"
      v-model="formData.foodname"
    />
    foodbrand:<input
      type="text"
      placeholder="foodbrand"
      v-model="formData.foodbrand"
    />
    foodstore:<input
      type="text"
      placeholder="foodstore"
      v-model="formData.foodstore"
    />
    foodprice:<input
      type="text"
      placeholder="foodprice"
      v-model="formData.foodprice"
    />
    foodamount:<input
      type="text"
      placeholder="foodamount"
      v-model="formData.foodamount"
    />
    foodDate<input
      type="text"
      placeholder="foodDate"
      v-model="formData.foodDate"
    />
    <button type="submit" class="outline">new</button>
  </form>
  <div class="lds-ellipsis" v-if="isLoading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div v-for="item in myvue3food" :key="item.id">
    <div :id="item.foodname"></div>
    <button class="outline contrast">
      <a href="#" class="top">top</a>
    </button>
    <button @click="SelectForUpadate(item)" class="outline secondary">
      select
    </button>
    <button @click="UpdateByForm(item)" class="outline contrast">update</button>
    <button @click="DeleteBySelect(item)">delete</button>
    <h2>foodname:{{ item.foodname }}</h2>
    <h3>foodbrand:{{ item.foodbrand }}</h3>
    <h3>foodstore:{{ item.foodstore }}</h3>
    <h5>foodprice:{{ item.foodprice }}</h5>
    <h5>foodamount:{{ item.foodamount }}</h5>
    <h6>foodDate:{{ item.foodDate }}</h6>
  </div>
</template>
<script setup>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBperuUWtP36lO_cRyGYSxuiTkhpy54F_Q",
  authDomain: "myvue3-e45b9.firebaseapp.com",
  projectId: "myvue3-e45b9",
  storageBucket: "myvue3-e45b9.firebasestorage.app",
  messagingSenderId: "439732498123",
  appId: "1:439732498123:web:46d43d1cb409e8678c754e",
  measurementId: "G-80R2D8D149",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref } from "vue";
const isLoading = ref(true);
const myvue3food = ref([]);
const myvue3foodCollection = collection(db, "myvue3food");
getDocs(myvue3foodCollection).then((snapshot) => {
  let documents = [];
  snapshot.docs.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });
  myvue3food.value = documents;
  console.log(documents);
  isLoading.value = false;
});
const formData = ref({
  foodname: "",
  foodbrand: "",
  foodstore: "",
  foodprice: "",
  foodamount: "",
  foodDate: "",
});
const SubmitForm = async () => {
  if (!formData.value.foodname) {
    Swal.fire("foodname is null.");
    return;
  }
  const q = query(
    myvue3foodCollection,
    where("foodname", "==", formData.value.foodname)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    Swal.fire(`${formData.value.foodname} is duplicate.`);
    return;
  }
  const result = await Swal.fire({
    title: "New foodname",
    html: `foodname:${formData.value.foodname}\nfoodbrand:${formData.value.foodbrand}\nfoodstore:${formData.value.foodstore}\nfoodprice:${formData.value.foodprice}\nfoodamoun:${formData.value.foodamount}\nfoodDate:${formData.value.foodDate}\n`.replace(
      /\n/g,
      "<br>"
    ),
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, new ${formData.value.foodname}!`,
  });

  if (result.isConfirmed) {
    const docRef = await addDoc(myvue3foodCollection, { ...formData.value });
    const newItem = { ...formData.value, id: docRef.id };
    myvue3food.value.push(newItem);
    await Swal.fire({
      title: "Newed!",
      text: `${formData.value.foodname} has been newed.`,
      icon: "success",
    });
    formData.value.foodname = "";
    formData.value.foodbrand = "";
    formData.value.foodstore = "";
    formData.value.foodprice = "";
    formData.value.foodamount = "";
    formData.value.foodDate = "";
  }
  // if (!formData.value.foodname) {
  //   alert("foodname is null.");
  //   return;
  // }
  // const q = query(
  //   myvue3foodCollection,
  //   where("foodname", "==", formData.value.foodname)
  // );
  // const querySnapshot = await getDocs(q);

  // if (!querySnapshot.empty) {
  //   alert("foodname is duplicate.");
  //   return;
  // }

  // if (
  //   !confirm(
  //     `${formData.value.foodname}\n${formData.value.foodbrand}\n${formData.value.foodstore}\n${formData.value.foodprice}\n${formData.value.foodamount}\n${formData.value.foodDate}\n`
  //   )
  // ) {
  //   return;
  // }

  // const docRef = await addDoc(myvue3foodCollection, { ...formData.value });
  // const newItem = { ...formData.value, id: docRef.id };
  // myvue3food.value.push(newItem);
  // formData.value.foodname = "";
  // formData.value.foodbrand = "";
  // formData.value.foodstore = "";
  // formData.value.foodprice = "";
  // formData.value.foodamount = "";
  // formData.value.foodDate = "";
};
function SelectForUpadate(item) {
  formData.value.foodname = item.foodname;
  formData.value.foodbrand = item.foodbrand;
  formData.value.foodstore = item.foodstore;
  formData.value.foodprice = item.foodprice;
  formData.value.foodamount = item.foodamount;
  formData.value.foodDate = item.foodDate;
}

async function UpdateByForm(item) {
  // if (!formData.value.foodname) {
  //   alert("foodname is null.");
  //   return;
  // }
  // if (
  //   !confirm(
  //     `${formData.value.foodname}\n${formData.value.foodbrand}\n${formData.value.foodstore}\n${formData.value.foodprice}\n${formData.value.foodamount}\n${formData.value.foodDate}\n`
  //   )
  // ) {
  //   return;
  // }
  // const docRef = doc(db, "myvue3food", item.id);
  // await updateDoc(docRef, { ...formData.value });
  // const index = myvue3food.value.findIndex((i) => i.id === item.id);
  // if (index !== -1) {
  //   myvue3food.value[index] = {
  //     ...myvue3food.value[index],
  //     ...formData.value,
  //   };
  // }
  if (!formData.value.foodname) {
    Swal.fire("foodname is null.");
    return;
  }
  const result = await Swal.fire({
    title: "Update foodname",
    html: `foodname:${formData.value.foodname}\nfoodbrand:${formData.value.foodbrand}\nfoodstore:${formData.value.foodstore}\nfoodprice:${formData.value.foodprice}\nfoodamoun:${formData.value.foodamount}\nfoodDate:${formData.value.foodDate}\n`.replace(
      /\n/g,
      "<br>"
    ),
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, update ${item.foodname}!`,
  });

  if (result.isConfirmed) {
    const docRef = doc(db, "myvue3food", item.id);
    await updateDoc(docRef, { ...formData.value });
    const index = myvue3food.value.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      myvue3food.value[index] = {
        ...myvue3food.value[index],
        ...formData.value,
      };
    }
    await Swal.fire({
      title: "Updated!",
      text: `${item.foodname} has been updated.`,
      icon: "success",
    });
    formData.value.foodname = "";
    formData.value.foodbrand = "";
    formData.value.foodstore = "";
    formData.value.foodprice = "";
    formData.value.foodamount = "";
    formData.value.foodDate = "";
  }
}

async function DeleteBySelect(item) {
  // if (!confirm(`delete is not rollback.\n${item.foodname}`)) {
  //   return;
  // }
  // const docRef = doc(db, "myvue3food", item.id);
  // await deleteDoc(docRef);
  // myvue3food.value = myvue3food.value.filter((food) => food.id !== item.id);
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, delete ${item.foodname}!`,
  });

  if (result.isConfirmed) {
    const docRef = doc(db, "myvue3food", item.id);
    await deleteDoc(docRef);
    myvue3food.value = myvue3food.value.filter((food) => food.id !== item.id);
    await Swal.fire({
      title: "Deleted!",
      text: `${item.foodname} has been deleted.`,
      icon: "success",
    });
  }
}

function ClearForm() {
  formData.value.foodname = "";
  formData.value.foodbrand = "";
  formData.value.foodstore = "";
  formData.value.foodprice = "";
  formData.value.foodamount = "";
  formData.value.foodDate = "";
}
</script>
<style scoped>
.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: currentColor;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
