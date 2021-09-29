import { createRouter, createWebHashHistory } from 'vue-router'
import Calender from './components/Calender.vue'
import UserDataApi from './components/UserDataApi.vue'

const routes = [
    { path: '/', component: Calender },
    { path: '/user-api', component: UserDataApi }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router