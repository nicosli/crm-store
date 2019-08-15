<template>
<div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/home">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Lista Proveedores</a></li>
        </ul>
    </nav>
    <div class="card">
        <div class="card-content">
            <article class="message is-info">
                <div class="message-body">Tabla de <strong>Proveedores</strong>.
                    Este módulo muestra una lista completa de todas los proveedores
                    que están dados de alta en el sistema
                </div>
            </article>
            <div class="columns">
                <div class="column is-9-widescreen">
                    <h3 class="subtitle m-t-sm">Lista de Proveedores</h3>
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
                    <b-table-column field="representante" label="Representante" sortable>
                            {{ props.row.representante }}
                    </b-table-column>
                    <b-table-column field="telefono" label="Telefono" sortable>
                            {{ props.row.telefono }}
                    </b-table-column>
                    <b-table-column field="email" label="Email" sortable>
                            {{ props.row.email }}
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
    <b-modal :active.sync="modalForm">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Guardar nuevo Proveedor</p>
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
                        placeholder="Nombre del proveedor"
                        v-model="addProveedor.nombre">
                    </b-input>
                </b-field>
                <b-field label="Representante">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        minlength="5"
                        icon="id-card-alt"
                        icon-pack="fas"
                        placeholder="Nombre del contacto (proveedor)"
                        v-model="addProveedor.representante">
                    </b-input>
                </b-field>
                <b-field label="Teléfono">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        type="number"
                        icon="phone"
                        icon-pack="fas"
                        placeholder="Teléfono"
                        v-model="addProveedor.telefono">
                    </b-input>
                </b-field>
                <b-field label="Email">
                    <b-input 
                        required
                        :disabled="loadingModal"
                        type="email"
                        icon="envelope"
                        icon-pack="fas"
                        placeholder="Email"
                        v-model="addProveedor.email">
                    </b-input>
                </b-field>
                <b-field label="Dirección">
                    <b-input
                        required
                        :disabled="loadingModal"
                        type="textarea" 
                        minlength="10"
                        maxlength="150"
                        v-model="addProveedor.direccion">
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <a class="button" @click="modalForm=false">Cerrar</a>
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
                addProveedor: {
                    id: '',
                    nombre: '',
                    representante: '',
                    telefono: '',
                    email: '',
                    direccion: ''
                },
                loadingModal: false,
                errores: []
            }
        },
        methods: {
            nuevoClick(){
                this.modalForm = true
                this.addProveedor.nombre = ''
                this.addProveedor.representante = ''
                this.addProveedor.telefono = ''
                this.addProveedor.email = ''
                this.addProveedor.direccion = ''
                this.addProveedor.id = ''
                this.errores = []
            },
            editClick(row){
                this.errores = []
                this.modalForm = true
                this.addProveedor = Object.assign({}, row)
            },
            deleteClick(row){
                this.$dialog.confirm({
                    title: 'Eliminar Proveedor',
                    message: 'Estás seguro de eliminar al proveedor <b>'+row.nombre+'?</b>',
                    confirmText: 'Eliminar proveedor',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.deleteRow(row)
                })
            },
            deleteRow(row){
                this.$toast.open({
                    message: 'Eiminando proveedor...',
                    type: 'is-danger',
                    duration: 1000
                })
                this.loadingModal = true
                this.$http.delete(
                    this.appConfig.$api_url+`/api/proveedores?id=`+row.id,
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.$toast.open({
                            message: 'El Proveedor se eliminó correctamente',
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
                if(this.addProveedor.id == '')
                    this.onSubmit()
                else
                    this.onSubmitUpdate()
            },
            onSubmitUpdate(){
                this.loadingModal = true
                this.$http.put(
                    this.appConfig.$api_url+`/api/proveedores`, 
                    this.addProveedor, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addProveedor.nombre
                        this.addProveedor.id = ''
                        this.$toast.open({
                            message: 'El Proveedor se actualizó correctamente',
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
                    this.appConfig.$api_url+`/api/proveedores`, 
                    this.addProveedor, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addProveedor.nombre
                        this.$toast.open({
                            message: 'El Proveedor se insertó correctamente',
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
                this.$http.get(this.appConfig.$api_url+`/api/proveedores`)
				.then(( {data} ) => {
					this.loading = false
                    this.data = []
                    data.results.forEach((item) => {
						this.data.push(item)
                    })
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
            this.loadTabla()
        }
    }
</script>
