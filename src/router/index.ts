import { createRouter, createWebHistory } from "vue-router";
import Form1 from "../pages/Form1.vue";
// import MainLayout from "../Layout/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   component: MainLayout,
    //   children: [{ path: "", name: "Form1", component: Form1 }],
    // },
    {
      path: "/",
      component: Form1,
      name: "Form1",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

export default router;

//  {
//       path: "/",
//       component: Layout,
//       children: [
//         { path: "", name: "Home", component: Home },
//         { path: "cart", name: "Cart", component: Cart },
//         {
//           path: "product/:id",
//           name: "ProductView",
//           component: Product,
//           beforeEnter: (to, from, next) => {
//             const productId = Number(to.params.id);
//             if (isNaN(productId)) {
//               next({ name: "notfound" });
//             } else {
//               next();
//             }
//           },
//         },
//         { path: "shop", name: "Shop", component: ShopPage },

//         {
//           path: "user",
//           name: "userProfile",
//           component: ProfilePage,
//           meta: { requiresAuth: true },
//         },
//       ],
//     },

//     { path: "/signIn", name: "SignIn", component: SignIn },
//     { path: "/signUp", name: "SignUp", component: SignUp },
//     { path: "/:pathMatch(.*)*", name: "notfound", component: NotFoundPage },
