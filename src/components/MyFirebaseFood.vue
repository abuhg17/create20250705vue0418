<template>
  <h1>My Firebase Food Page</h1>
  <MyCenter>
    <p>
    <div class="myBorder">
      <button class="button is-success" @click="isshownew = !isshownew">
        isshownew
      </button>
    </div>
    </p>
    <br/>
    <div class="myBorder" v-if="isshownew">
      <button @click="ClearForm()" class="button is-success">clear</button>
      <button class="button is-info is-light">
        <a :href="`#${formData.foodname}`"> Go to {{ formData.foodname }}</a>
      </button>
      <Form @submit="SubmitForm" :validation-schema="formSchema">
        <div class="field">
          <p>
            <label class="label">foodname:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="foodname"
                type="text"
                placeholder="foodname"
                v-model="formData.foodname"
              />
            </p>
            <p>
              <ErrorMessage name="foodname" />
            </p>
          </div>
        </div>
        <div class="field">
          <p>
            <label class="label">foodbrand:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="foodbrand"
                type="text"
                placeholder="foodbrand"
                v-model="formData.foodbrand"
              />
            </p>
            <p>
              <ErrorMessage name="foodbrand" />
            </p>
          </div>
        </div>
        <div class="field">
          <p>
            <label class="label">foodstore:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="foodstore"
                type="text"
                placeholder="foodstore"
                v-model="formData.foodstore"
              />
            </p>
            <p>
              <ErrorMessage name="foodstore" />
            </p>
          </div>
        </div>
        <div class="field">
          <p>
            <label class="label">foodprice:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="foodprice"
                type="number"
                placeholder="foodprice"
                v-model="formData.foodprice"
              />
            </p>
            <p>
              <ErrorMessage name="foodprice" />
            </p>
          </div>
        </div>
        <div class="field">
          <p>
            <label class="label">foodamount:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="foodamount"
                type="number"
                placeholder="foodamount"
                v-model="formData.foodamount"
              />
            </p>
            <p>
              <ErrorMessage name="foodamount" />
            </p>
          </div>
        </div>
        <div class="field">
          <p>
            <label class="label">fooddate:</label>
          </p>
          <div class="control">
            <p>
              <Field
                name="fooddate"
                type="date"
                placeholder="fooddate"
                v-model="formData.fooddate"
              />
            </p>
            <p>
              <ErrorMessage name="fooddate" />
            </p>
          </div>
        </div>
        <button type="submit" class="button is-primary button is-large">
          new
        </button>
      </Form>
    </div>
    <br />
    <div class="myBorder">
      <div class="lds-ellipsis" v-if="isLoading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
           <p>
    <div class="myBorder" v-if="!isLoading">
      <div>總共有{{ myvue3food.length }}筆商品吃喝</div>
    </div>
    </p>
     <br/>
     <p>
              <button class="outline contrast">
          <a href="#bottom" class="button is-link">bottom</a>
        </button>
     </p>
     <br/>
    <div v-for="item in myvue3food" :key="item.id">
      <div class="myBorder">
        <div :id="item.foodname"></div>
        <button class="outline contrast">
          <a href="#" class="button is-link">top</a>
        </button>
        <button @click="SelectForUpadate(item)" class="button is-info">
          select
        </button>
        <button @click="UpdateByForm(item)" class="button is-warning">
          update
        </button>
        <button @click="DeleteBySelect(item)" class="button is-danger">
          delete
        </button>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left"></div>
              <div class="media-content">
                <p class="title is-4">{{ item.foodname }}</p>
                <p class="subtitle is-6">{{ item.foodbrand }}</p>
              </div>
            </div>

            <div class="content">
              在{{ item.foodstore }}購買，一件{{ item.foodprice }}元，剩餘{{
                item.foodamount
              }}件
              <br />
              <time datetime="2025-07-05">有效期限至:{{ item.fooddate }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div id="bottom"></div>
     </MyCenter>
</template>
<script setup>
import MyCenter from "@/components/MyCenter.vue";
import { ref } from "vue";
const isshownew = ref(true);
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
  fooddate: "",
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
    html: `foodname:${formData.value.foodname}\nfoodbrand:${formData.value.foodbrand}\nfoodstore:${formData.value.foodstore}\nfoodprice:${formData.value.foodprice}\nfoodamoun:${formData.value.foodamount}\nfooddate:${formData.value.fooddate}\n`.replace(
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
    formData.value.fooddate = "";
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
  //     `${formData.value.foodname}\n${formData.value.foodbrand}\n${formData.value.foodstore}\n${formData.value.foodprice}\n${formData.value.foodamount}\n${formData.value.fooddate}\n`
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
  // formData.value.fooddate = "";
};
function SelectForUpadate(item) {
  formData.value.foodname = item.foodname;
  formData.value.foodbrand = item.foodbrand;
  formData.value.foodstore = item.foodstore;
  formData.value.foodprice = item.foodprice;
  formData.value.foodamount = item.foodamount;
  formData.value.fooddate = item.fooddate;
}

async function UpdateByForm(item) {
  // if (!formData.value.foodname) {
  //   alert("foodname is null.");
  //   return;
  // }
  // if (
  //   !confirm(
  //     `${formData.value.foodname}\n${formData.value.foodbrand}\n${formData.value.foodstore}\n${formData.value.foodprice}\n${formData.value.foodamount}\n${formData.value.fooddate}\n`
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
    html: `foodname:${formData.value.foodname}\nfoodbrand:${formData.value.foodbrand}\nfoodstore:${formData.value.foodstore}\nfoodprice:${formData.value.foodprice}\nfoodamoun:${formData.value.foodamount}\nfooddate:${formData.value.fooddate}\n`.replace(
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
    formData.value.fooddate = "";
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
  formData.value.fooddate = "";
}
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const formSchema = yup.object({
  foodname: yup
    .string()
    .max(15, "Sorry, a max of 15.")
    .required("foodname is required."),
  foodbrand: yup
    .string()
    .max(15, "Sorry, a max of 15.")
    .required("foodbrand is required."),
  foodstore: yup
    .string()
    .max(15, "Sorry, a max of 15.")
    .required("foodstore is required."),
  foodprice: yup
    .number()
    .max(999999, "Sorry, a max of 999999.")
    .required("foodprice is required.")
    .positive()
    .integer(),
  foodamount: yup
    .number()
    .max(99, "Sorry, a max of 99.")
    .required("foodamount is required.")
    .integer(),
  fooddate: yup.date().required("fooddate is required."),
});
function AutoNew(
  foodname,
  foodbrand,
  foodstore,
  foodprice,
  foodamount,
  fooddate
) {
  formData.value.foodname = foodname;
  formData.value.foodbrand = foodbrand;
  formData.value.foodstore = foodstore;
  formData.value.foodprice = foodprice;
  formData.value.foodamount = foodamount;
  formData.value.fooddate = fooddate;
  SubmitForm();
}
// AutoNew("金莎五粒裝", "金莎", "全家", "73", "0", "2025-00-00");
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
.myBorder {
  border: 1px solid;
  display: inline-block;
}
</style>
