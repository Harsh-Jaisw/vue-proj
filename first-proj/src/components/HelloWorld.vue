<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios"
defineProps({
  // msg: {
  //   type: Number,
  //   required: true
  // }
})
const dummyData = ref([])
const toggle = ref(true)
onMounted(() => {
  fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
    .then((res) => res.json())
    .then((data) => {
      dummyData.value = data
    })
})
function postData(data) {
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify({
    title: data,
    userId: 5,
  })
  axios.post('https://dummyjson.com/posts/add', body, { headers })
    .then(res => res.json())
    .then(console.log);
}
function handleToggle() {
  toggle.value = !toggle.value
}
const isActive = ref(true)
const hasError = ref(true)
</script>

<template>
  <div v-if="toggle" class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <!-- <p>{{ dummyData }}</p> -->
    <button v-on:click="() => postData('This is the dummy post for test')">Post Data</button>
  </div>
  <button v-on:click="() => handleToggle()">Toogle Content</button>
  <div class="static-class" :class="{ strikeout: isActive, priority: hasError }"> Class Binding </div>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.strikeout {
  text-decoration: line-through;
}

.priority {
  color: rgb(217, 81, 81);
  font-weight: bold;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}</style>
