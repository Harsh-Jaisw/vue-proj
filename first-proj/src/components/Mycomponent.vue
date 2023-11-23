<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../Store/TaskManager';

const message = ref("")
const checkbox = ref(false)
const editValue = ref("")
const taskStore=useTaskStore()
function handleTask() {
  let obj = { task: message.value, priority: checkbox.value ,edited:false,id:Math.random()*9999}
  if (message.value !== "") {
    taskStore.adTask(obj)
  }
  message.value = ""
  checkbox.value = false
}

function handleEdit(data) {
  taskStore.editTask(data)
}

function handleEditValue(data) {
  taskStore.tasks.forEach((item) => {
    if (item === data) {
      item.task = editValue.value
      item.edited = false
      editValue.value = ""
    }
  })
}
function handleDelete(data){
  taskStore.delTask(data)
}
</script>

<template>
  <input v-model="message" placeholder="Add Task" />
  <input v-model="checkbox" type="checkbox" />
  <button v-on:click="handleTask">Submit</button>
  <button @click="taskStore.$reset">Reset Store</button>
  <div v-for="item, index in taskStore.tasks" :key="index" :class="{ priority: item.priority }">
    <div :style="{display:'flex' ,alignItems:'center',gap:'10px'}">

   
    <p @click="handleEdit(item)">

      {{ item.task }}
    </p> 
    <button @click="handleDelete(item)">Delete Task</button>
  </div>
    <input v-if="item.edited" v-model="editValue" />
    <button v-if="item.edited" @click="handleEditValue(item)">Edit</button>
  </div>
  <p :style="{color:'green'}">Priority Task</p>
  <div v-for="item,index in taskStore.priority" :key="index">
   <p>{{ item.task }}</p>
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