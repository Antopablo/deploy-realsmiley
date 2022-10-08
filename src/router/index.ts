import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StoreView from "../views/StoreView.vue";
import ContractView from "../views/ContractView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/contract",
      name: "contract",
      component: ContractView
    },
  ],
});

export default router;
