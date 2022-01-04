import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../components/Home'
import Fibonacci from "../components/Fibonacci";
import Docs from "../components/Docs";

Vue.use(VueRouter);

const routes = [

    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/fibonacci",
        name: "Fibonnaci",
        component: Fibonacci
    },

    {
        path: "/docs",
        name: "Docs",
        component: Docs
    },
];

const router = new VueRouter({
    routes
});

export default router;