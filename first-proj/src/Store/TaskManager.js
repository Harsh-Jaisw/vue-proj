import { defineStore } from "pinia";
import axios from 'axios'
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "Harsh Jaiswal",
    tasks: [],
    userData:[]
  }),
  getters: {
    priority() {
      return this.tasks.filter((task) => task.priority);
    },
},
actions: {
    async getUser(id){
       let res= await axios.get(`https://reqres.in/api/users?page=${id}`)
       this.userData =await res.data.data 
        return this.userData
    },
    adTask(task) {
      return this.tasks.push(task);
    },
    delTask(task) {
      return this.tasks=[...this.tasks.filter((item) => item.id !== task.id)];
    },
    editTask(task){
    return this.tasks.forEach((item) => {
        if (item == task) {
          item.edited = !item.edited
        }
      })
    }
  },
});
