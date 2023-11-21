import HelloWorld from "./components/HelloWorld.vue";
import Mycomponent from "./components/Mycomponent.vue";
import WelcomeItem from "./components/WelcomeItem.vue"
import {createRouter,createWebHistory} from "vue-router"
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/Mycomponent", component: Mycomponent },
  {path:"/Welcome/:id/:name",component:WelcomeItem}
];

const router =createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
