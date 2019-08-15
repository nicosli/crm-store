<template>
<div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/home">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Lista Productos</a></li>
        </ul>
    </nav>
    <div class="card">
        <div class="card-content">
            <article class="message is-info">
                <div class="message-body">Tabla de <strong>Productos</strong>.
                    Este módulo muestra una lista completa de todas los productos
                    que están dados de alta en el sistema
                </div>
            </article>
            <div class="columns">
                <div class="column is-9-widescreen">
                    <h3 class="subtitle m-t-sm">Lista de productos</h3>
                </div>
                <div class="column is-3-widescreen">
                    <b-input 
                        icon-pack="fas"
                        icon="search"
                        v-model="searchKeyword"
                        placeholder="búsqueda...">
                    </b-input>
                </div>
            </div>
            <div v-show="loading">
                cargando...
            </div>
            <b-button
                @click="nuevoClick()" 
                v-show="!loading" 
                type="is-primary">
                Agregar
            </b-button>
            <b-table
                :data="filteredData"
                :loading="loading"
                paginated
                :per-page="perPage"
                :striped=true
                :hoverable=true
                :default-sort-direction="defaultSortOrder"
                :focusable=true>
                <template slot-scope="props">
                    <b-table-column field="nombre" label="Nombre" sortable>
                        {{ props.row.nombre }}
                    </b-table-column>
                    <b-table-column field="descripcion" label="Descripción" sortable>
                        {{ props.row.descripcion | truncate(15) }}
                    </b-table-column>
                    <b-table-column field="costo" label="Costo" sortable>
                        {{ props.row.costo | formatNumber() }}
                    </b-table-column>
                    <b-table-column field="precio_publico" label="Precio Público" sortable>
                        {{ props.row.precio_publico | formatNumber() }}
                    </b-table-column>
                    <b-table-column field="existencia" label="Existencia" sortable>
                        {{ props.row.existencia }}
                    </b-table-column>
                    <b-table-column field="" label="">
                        <a :href="'/lista/piezas/'+props.row.id">Piezas</a>
                    </b-table-column>
                    <b-table-column field="" label="">
                        <b-button type="is-info"
                            @click="editClick(props.row)"
                            icon-pack="far"
                            icon-left="edit">
                            Editar
                        </b-button>
                    </b-table-column>
                    <b-table-column field="" label="">
                        <b-button type="is-danger"
                            @click="deleteClick(props.row)"
                            icon-pack="far"
                            icon-left="trash-alt">
                            Eliminar
                        </b-button>
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </div>
    <b-modal :active.sync="modalForm" @close="closeModal()">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Guardar nuevo Producto</p>
            </header>
            <form v-on:submit.prevent="onSubmitControll">
            <section class="modal-card-body">
                <b-message type="is-danger" v-show="errores.length > 0">
                    <label v-for="error in errores">{{error}}</label>
                </b-message>
                <b-field label="Nombre">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        minlength="5"
                        icon="shipping-fast"
                        icon-pack="fas"
                        placeholder="Nombre del producto"
                        v-model="addProducto.nombre">
                    </b-input>
                </b-field>
                <b-field label="Costo">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        type="number"
                        icon="phone"
                        icon-pack="fas"
                        placeholder="Costo neto"
                        v-model="addProducto.costo">
                    </b-input>
                </b-field>
                <b-field label="Precio Público">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        type="number"
                        icon="phone"
                        icon-pack="fas"
                        placeholder="Precio Público"
                        v-model="addProducto.precio_publico">
                    </b-input>
                </b-field>
                <div class="columns">
                    <div class="column">
                        <b-field label="Categoria">
                            <b-select 
                                expanded
                                v-model="addProducto.categoria_id"
                                placeholder="Selecciona una categoría">
                                <option
                                    v-for="categoria in categorias"
                                    :value="categoria.id"
                                    :key="categoria.id">
                                    {{ categoria.nombre }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Proveedor">
                            <b-select 
                                expanded
                                v-model="addProducto.proveedor_id"
                                placeholder="Selecciona un proveedor">
                                <option
                                    v-for="proveedor in proveedores"
                                    :value="proveedor.id"
                                    :key="proveedor.id">
                                    {{ proveedor.nombre }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                </div>
                <b-field label="Descripcción">
                    <b-input
                        required
                        :disabled="loadingModal"
                        type="textarea" 
                        minlength="10"
                        maxlength="150"
                        v-model="addProducto.descripcion">
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" 
                    @click="closeModal()">Cerrar</button>
                <button class="button is-primary" type="submit" :disabled="loadingModal">
                    Guardar
                </button>
            </footer>
            </form>
        </div>
    </b-modal>
</div>    
</template>

<script>

    export default {
        data() {
            return {
                loading: false,
                data: [],
                sortField: 'fechaFuente',
                sortOrder: 'desc',
                defaultSortOrder: 'desc',
                filtered: '',
                searchKeyword: '',
				perPage: 5,
                modalForm: false,
                addProducto: {
                    id: '',
                    nombre: '',
                    costo: '',
                    precio_publico: '',
                    descripcion: '',
                    categoria_id: '',
                    proveedor_id: ''
                },
                loadingModal: false,
                errores: [],
                categorias: [],
                colores: [],
                proveedores: [],
                tallas: []
            }
        },
        methods: {
            nuevoClick(){
                this.modalForm = true
                this.addProducto.nombre = ''
                this.addProducto.costo = ''
                this.addProducto.precio_publico = ''
                this.addProducto.descripcion = ''
                this.addProducto.categoria_id = ''
                this.addProducto.proveedor_id = ''
                this.addProducto.id = ''
                this.errores = []
            },
            editClick(row){
                this.errores = []
                this.modalForm = true
                this.addProducto = Object.assign({}, row)
            },
            deleteClick(row){
                let message = 'Estás seguro de eliminar el producto '
                            + '<b>'+row.nombre+'?</b>, se eliminará todos'
                            + ' los productos registrados con este proveedor'
                this.$dialog.confirm({
                    title: 'Eliminar Producto',
                    message: message,
                    confirmText: 'Eliminar producto',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.deleteRow(row)
                })
            },
            deleteRow(row){
                this.$toast.open({
                    message: 'Eiminando producto...',
                    type: 'is-danger',
                    duration: 1000
                })
                this.loadingModal = true
                this.$http.delete(
                    `http://nekkyn.nicosli.com/api/productos?id=`+row.id,
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.searchKeyword = ''
                        this.loadTabla()
                        this.$toast.open({
                            message: 'El producto se eliminó correctamente',
                            type: 'is-info',
                            duration: 4000
                        })
                    } else {
                        this.errores = data.message
                    }
				})
				.catch((error) => {
					this.loading = false
					throw error
				})
            },
            onSubmitControll(){
                if(this.addProducto.id == '')
                    this.onSubmit()
                else
                    this.onSubmitUpdate()
            },
            onSubmitUpdate(){
                this.loadingModal = true
                this.$http.put(
                    `http://nekkyn.nicosli.com/api/productos`, 
                    this.addProducto, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addProducto.nombre
                        this.$toast.open({
                            message: 'El producto se actulizó correctamente',
                            type: 'is-info',
                            duration: 4000
                        })
                    } else {
                        this.errores = data.message
                    }
				})
				.catch((error) => {
					this.loading = false
					throw error
				})
            },
            onSubmit(){
                this.loadingModal = true
                this.$http.post(
                    `http://nekkyn.nicosli.com/api/productos`, 
                    this.addProducto, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addProducto.nombre
                        this.$toast.open({
                            message: 'El Producto se insertó correctamente',
                            type: 'is-success'
                        })
                    } else {
                        this.errores = data.message
                    }
				})
				.catch((error) => {
					this.loading = false
					throw error
				})
            },
            loadTabla() {
                this.loading = true
                this.$http.get(`http://nekkyn.nicosli.com/api/productos`)
				.then(( {data} ) => {
					this.loading = false
                    this.data = []
                    data.results.forEach((item) => {
						this.data.push(item)
                    })
                    this.categorias = data.categorias
                    this.colores = data.colores
                    this.proveedores = data.proveedores
                    this.tallas = data.tallas
				})
				.catch((error) => {
					this.loading = false
					throw error
				})
            },
            closeModal(){
                
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
            this.loadTabla()
        }
    }
</script>
