
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
    request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBiZjkzZWZjOWRhZmRhNDBmNjUyYmY3MTA0YzkwYzIwMGRlNDVjZTQ3ZGEzZDQzMmYxZjMwYWE4MjNiODg2MDE0ZGQxNGUzYTBmODJkOWY1In0.eyJhdWQiOiIxIiwianRpIjoiMGJmOTNlZmM5ZGFmZGE0MGY2NTJiZjcxMDRjOTBjMjAwZGU0NWNlNDdkYTNkNDMyZjFmMzBhYTgyM2I4ODYwMTRkZDE0ZTNhMGY4MmQ5ZjUiLCJpYXQiOjE1NjU4NzkzNDIsIm5iZiI6MTU2NTg3OTM0MiwiZXhwIjoxNTk3NTAxNzQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.T6vPNvYuHN2j5UZsm8otKSbg3FQi0JhV390XM8Zi6QZwGMJLuHLeB8OFgO579Skmf-Fr_wMf_QUesfEFB6b4Icp2hYVE7tPYVtqYCYSoPXp39ZEtvD8S_VnWr7XPqA3kAgWEvcZFAlilPnyOzBtuFkTB4nywhsnpsvGK9zoQvAlnF1Be3_T-mYyar8b7xQ49Mb9fCQXLP9DyEjbFWp87V79tHuSi1FpAVHUGk18Lrd9Mxl3jcp1FaTRfDhkHIMrm8HyYK1ZMnyZIW2zo3fwrRmQNHSQl_E4qQjITQPGjDrDf4suLR_7m1QmiS0opZ8kyY6Mb1qlBr5gbzXsgUzkqNO2WqbBKOSX2bHeA56fag83wRJ88o6d4GC0B4s8_V0gaDObujjWS4w5evtMdBEyiIBe0sEo6AFMvE893ylmhzQOk0jpKxKDKchYUNOW-L1hrG1G2b6XbC-lM1qAokFsh5U4FQJWZGQqeKMUgtItg9vbd9v48TIRU_d6iR8TFVdE_cQv6_9uOXurmJkfDNWvIVDsDXe3lo8yzzz59hsEdxUteknzd107ldi_E9t3F-a0ibB2rzcAOIzGJPA2X5i3haLkqSlOLFwP61l4g31orp4-0q8wtNDZb4mhRisBBiTU5eJS9JEeJkmYGgxQv37DObDIwzCV3-REGqo08AZFeRFw')
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
