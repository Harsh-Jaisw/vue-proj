<script setup>
import { ref } from 'vue';

const posts = ref([
])
function handleTask() {
  let obj = { label: message.value, priority: checkbox.value }
  if (message.value !== "") {
    console.log(message.value)
    posts.value.push(obj)
    console.log(posts.value)
  }
  message.value = ""
  checkbox.value = false
}
const message = ref("")
const checkbox = ref(false)
const editValue = ref("")
function handleEdit(data) {
  posts.value.forEach((item) => {
    if (item == data) {
      item.edited = true
    }
  })
}
function handleEditValue(data) {
  posts.value.forEach((item) => {
    if (item === data) {
      item.label = editValue.value
      item.edited = false
      editValue.value = ""
    }
  })
}
</script>

<template>
  <input v-model="message" placeholder="Add Task" />
  <input v-model="checkbox" type="checkbox" />
  <button v-on:click="handleTask">Submit</button>
  <div v-for="item, index in posts" :key="index" :class="{ priority: item.priority }">
    <p @click="handleEdit(item)">

      {{ item.label }}
    </p>
    <input v-if="item.edited" v-model="editValue" />
    <button v-if="item.edited" @click="handleEditValue(item)">Edit</button>
  </div>
</template>
<style scoped>
.priority {
  color: red;
}

p {
  cursor: pointer
}
</style>