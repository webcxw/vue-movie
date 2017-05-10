import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from "@/components/home"
import Yanchu from "@/components/yanchu"
import Faxian from "../components/faxian.vue"
import Me from "../components/me.vue"
import Info from "../components/info.vue"
import Login from "../components/login.vue"
import Search from "../components/search.vue"
Vue.use(Router) 

export default new Router({
    routes: [
        // {
        //     path:"/",
        //     name:"hello",
        //     component:Hello
        // },
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/yanchu",
            name:"yanchu",
            component:Yanchu
        },
        {
            path:"/faxian",
            name:"faxian",
            component:Faxian
        },
        {
            path:"/me",
            name:"me",
            component:Me
        },
        {
            path:"/info/:id",
            name:"info",
            component:Info
        },
        {
            path:"/login",
            name:"login",
            component:Login
        },
        {
            path:"/search",
            name:"search",
            component:Search
        }
    ]
})