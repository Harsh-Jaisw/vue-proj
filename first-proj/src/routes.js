import HelloWorld from "./components/HelloWorld.vue";
import Mycomponent from "./components/Mycomponent.vue";
import {createRouter,createWebHistory} from "vue-router"
const routes = [
  { path: "/Hello", component: HelloWorld },
  { path: "/Mycomponent", component: Mycomponent },
];

const router =createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
