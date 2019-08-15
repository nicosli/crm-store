
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

Vue.component(
    'lista-productos',
    require('./components/ListaProductos.vue')
);

Vue.component(
    'lista-piezas',
    require('./components/ListaPiezas.vue')
);

Vue.component(
    'modulo-punto-venta',
    require('./components/PuntoVenta.vue')
);

Vue.use(Buefy, {
    defaultIconPack: 'fa'
})


Vue.use(require('vue-resource'));
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIyY2Y5MGJiNjFmOTJlZWIzNjA5MTk4MjMwMjVmMmY3ZGIyNzliNDI2ZGE4NDM0OWM4OTEwOWEzNzU4MWI5YWIwZmVmYTg3M2QzMzc5ZDczIn0.eyJhdWQiOiIxIiwianRpIjoiMjJjZjkwYmI2MWY5MmVlYjM2MDkxOTgyMzAyNWYyZjdkYjI3OWI0MjZkYTg0MzQ5Yzg5MTA5YTM3NTgxYjlhYjBmZWZhODczZDMzNzlkNzMiLCJpYXQiOjE1NjU4MTQ1NjMsIm5iZiI6MTU2NTgxNDU2MywiZXhwIjoxNTk3NDM2OTYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.uD5VmZ-Yv-8RW8fLYkg_HY3FFUsLbqcHLDStRn5cjAxHwq_X0kY5_0Yr3VerxkRmIJu49RF8JsLg4FZ4VwvT8VPy5qcv0TgAOWwWWQ0na_infM3SwCaWo8GxE7Szo-pAafsgT3c55sOxU2WvuUiK6RSoR_xl0xLg7L3dvBrhI1uYjQXNtw93aYO3A0XD8aJvy3p6l_drzZCCzga6W8pW-QjpytJaCaPqqab6zw6NUGnoPJHw9FLzt-tGlhvH3pDxbCnzy80dbrm_A0HOgpLUhHRvZH5m8LrRAi5NBb7wyUe_lYE80_V64MVH45BpWHFONwcHKSNBiJ4H5yJOeZ0w-F0EMk93I18hYTuYpOeHO2kLXKlMYyU80zpa297zOvWwxzkf62igA3EPM9NjgI7qYL2Gz0Fj9w6_YJ8azKszvUV7CNJ9A3Fic7oyngf1YjDXEwfPW0GS_FeDGsEN2U9FVY62cHikb3_IcTTIO6hAX2QdM1HzHYgTukx1q3pzCMaHeGd9ITR0ZD6iwaKNDjMjBSmKWY-uagIxT9wzDuMCy3KGZQfUECCTENn2Hddv_Drkt4pff6QZyzlhaHtUmn3CT_9v2mVEbcP4agpHcvA74zqCMdm8tP6hWOFEZPGKPiVMJf6L8RLu_NS_daarRDeKktvdukOKKtW0vmv49WnKa54')
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
