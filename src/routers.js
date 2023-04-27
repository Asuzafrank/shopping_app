import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import About from "./components/About.vue";
import ProductDetail from "./components/ProductDetail.vue";
import PostProduct from "./components/PostProduct.vue";
import Cart from "./components/Cart.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "ProductDetail",
    component: ProductDetail,
    path: "/product-detail/:id",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
  {
    name: "PostProduct",
    component: PostProduct,
    path: "/post",
  },
  {
    name: "Cart",
    component: Cart,
    path: "/cart",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
