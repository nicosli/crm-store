<template>
<div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/home">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Punto de venta</a></li>
        </ul>
    </nav>
    <div class="card">
        <div class="card-content">
            <form v-on:submit.prevent="searchProduct">
            <b-field>
                <b-input placeholder="código de barras..."
                    :loading="loading"
                    :disabled="loading"
                    v-model="barcode"
                    ref="barcode"
                    type="search"
                    icon-pack="fab"
                    icon="searchengin">
                </b-input>
            </b-field>
            </form>

            <table class="m-t-md table is-responsive is-striped is-hoverable is-fullwidth" 
                v-if="carrito.length > 0">
                <thead>
                    <tr>
                        <th>barcode</th>
                        <th>Nombre</th>
                        <th>Talla</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in carrito">
                        <td>
                            <label class="has-text-danger">{{item.barcode}}</label>
                        </td>
                        <td>
                            {{item.producto.nombre}}
                        </td>
                        <td>
                            {{item.talla.nombre}}
                        </td>

                        <td>
                            {{item.color.nombre}}
                        </td>
                        <td>
                            {{item.producto.precio_publico}}
                        </td>
                        <td>
                            <a class="delete is-danger"></a>
                        </td>
                    </tr>
                </tbody> 
            </table>
            <div v-if="carrito.length > 0" class="is-clipped">
                <article class="message is-info">
                    <div class="message-header">
                        Desglose
                    </div>
                </article>
                <div class="p-r-sm">
                    <div class="is-pulled-right">Total</div>
                    <div class="is-clearfix"></div>
                    <label class="is-pulled-right" style="font-size:1.5em">
                        <b>$ MXN {{granTotal | formatNumber()}}</b>
                    </label>
                </div>
                <div class="is-clearfix m-b-sm"></div>
                <b-button
                    class="is-pulled-right"
                    @click="cerrarVenta()" 
                    v-show="carrito.length > 0" 
                    type="is-info">
                    Guardar venta
                </b-button>
            </div>
        </div>
    </div>
</div>    
</template>

<script>

    export default {
        data() {
            return {
                loading: false,
                barcode: '',
                data: [],
                carrito: [],
                granTotal: 0
            }
        },
        methods: {
            calculaTotales(){
                this.granTotal = 0
                this.carrito.forEach((item) => {
                    this.granTotal += parseInt(item.producto.precio_publico)
                })
            },
            searchProduct(){
                this.loading = true
                this.$http.get(`http://nekkyn.nicosli.com/api/piezas/buscar/`+this.barcode)
				.then(( {data} ) => {
					this.loading = false
                    if(data.error == false){
                        this.carrito.push(data.result)
                        this.barcode = ''
                        this.calculaTotales()
                    }else{
                        this.$toast.open({
                            message: 'No se encontró la pieza...',
                            type: 'is-danger',
                            duration: 3000
                        })
                    }
				})
				.catch((error) => {
					this.loading = false
					throw error
				})
            }
        },
        computed: {
            filteredData(){
                return this.data.filter((item) => {
                    this.filtered = item.nombre.toLowerCase().includes(this.searchKeyword.toLowerCase())

                    return this.filtered
                })
            }
        },
        filters: {
            formatNumber(value){
                let val = (value/1).toFixed(2).replace(',', '')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            truncate(value, length) { 
                return value.length > length 
                    ? value.substr(0, length) + '...' 
                    : value 
            },
        },
        mounted() {

        }
    }
</script>
