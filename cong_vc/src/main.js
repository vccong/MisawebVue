import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CustomerList from './components/page/dictionary/customer/CustomerList.vue'


const routes = [
    { path: '/danh-muc/khach-hang', component: CustomerList },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
    render: h => h(App),
    router
}).$mount('#app')