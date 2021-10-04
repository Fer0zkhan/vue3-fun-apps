import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Calender from './pages/Calender.vue'
import UserDataApi from './pages/UserDataApi.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'
import Calculator from './pages/Calculator.vue'
import ReusableModal from './pages/ReusableModal.vue'
import Home from './pages/Home.vue'
import UserCrud from './pages/UserCrud.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/calendar', component: Calender },
    { path: '/user-api', component: UserDataApi },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/re-usable-modal', component: ReusableModal },
    {path: '/user-crud', component: UserCrud}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router