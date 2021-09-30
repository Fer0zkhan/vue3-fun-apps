import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Calender from './pages/Calender.vue'
import UserDataApi from './pages/UserDataApi.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'

const routes = [
    { path: '/', component: Calender },
    { path: '/user-api', component: UserDataApi },
    { path: '/markdown', component: Markdown },
    {path: '/slider', component: Slider}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router