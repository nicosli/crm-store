
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
import Buefy from 'buefy'

import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)


Vue.component(
    'lista-proveedores',
    require('./components/ListaProveedores.vue')
);

Vue.use(Buefy, {
    defaultIconPack: 'fa'
})


Vue.use(require('vue-resource'));
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmMjk0MTdmMjhkNTg4ZTJhODNkMjNkMGY0YmU4MjRhM2UzNDI5N2U1YjMzNTk5MWIyYTYyMWViNDZiYTAzYThkZTBlYmUxNDBjM2IxMWM2In0.eyJhdWQiOiIxIiwianRpIjoiN2YyOTQxN2YyOGQ1ODhlMmE4M2QyM2QwZjRiZTgyNGEzZTM0Mjk3ZTViMzM1OTkxYjJhNjIxZWI0NmJhMDNhOGRlMGViZTE0MGMzYjExYzYiLCJpYXQiOjE1NjU3MTUxNDQsIm5iZiI6MTU2NTcxNTE0NCwiZXhwIjoxNTk3MzM3NTQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.a7gqi8rWV_SOxLr7FrH-6H9loQiVA2R_vw1X08dJNx27oPPStCnmF7vI2U809oUxNSN9srGMdj0twFKyTJX_WRk7igmknnMjo7e2xRLXRuf9alfb0uTD63ZLZwRcNksUujzmbbrfxRWokYidOxyx_WoPrxhAodN_1ktRtUGEpcPWewFHONlpHGFQAYk5YZxAcqxCxLltI8XjkyKwQN-8UZe1vCqPzlbderalilFzFFcZ-MhgY6FkQnGVkv0ISB5Gwc0G9iG39mo7jPGmKzXad_Na5IA8JiHS3aXacgVp7jfd71K7rKNROtswMrXO6dqHi8rxPHBCHPbaOPZQGCtCYvc5phUKuWlsdQuYhJFvn7kvCn8-Bxo7RNH5DBmh8Y255aAegVq0s6BUqRbZx6Ur8jvBVD2nJCbm3r9JCU6_j8ZYHqo1NiCNIy8KiSrNi1i9rLHrdMp-YFHtMzclyyfqdLfnipe_FOkunJGgFP7b8H_3v54S-KQ36wT_9vGXFQdKduq0Gao_IWjmoezT6T70JlPkVOlUlvr-rDdSmvPPTyQjzHPBx7nORfpV3V1qlXNyqHVHhxEYBDydSRYFpWVJ0c1AGG4Tcy7PfVW6eep0cnkmJI5LDvPck_bHPfyYs2AmAQA474OPxeaG-VN6hv9OqEa05TWNU4UgzMbrPvaVTn0')
    request.headers.set('Content-Type', 'application/x-www-form-urlencoded')
    request.headers.set('Accept', 'application/json')
    next()
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
