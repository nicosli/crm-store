<template>
<div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/lista/productos">Almacén</a></li>
            <li class="is-active"><a href="#" aria-current="page">Lista piezas</a></li>
        </ul>
    </nav>
    <div class="card">
        <div class="card-content">
            <div class="columns">
                <div class="column is-9-widescreen">
                    <h3 class="subtitle m-t-sm">Lista de piezas</h3>
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
                    <b-table-column field="barcode" label="barcode" sortable>
                        <label class="has-text-danger">
                            {{ props.row.barcode }}
                        </label>
                    </b-table-column>
                    <b-table-column field="modelo" label="modelo" sortable>
                        {{ props.row.producto.nombre }}
                    </b-table-column>
                    <b-table-column field="proveedor" label="proveedor" sortable>
                        {{ props.row.producto.proveedor.nombre }}
                    </b-table-column>
                    <b-table-column field="talla" label="talla" sortable>
                        {{ props.row.talla.nombre }}
                    </b-table-column>
                    <b-table-column field="color" label="color" sortable>
                        {{ props.row.color.nombre }}
                    </b-table-column>
                    <b-table-column field="existencia" label="existencia" sortable>
                        <label class="has-text-info">
                            {{ props.row.existencia }}
                        </label>
                    </b-table-column>
                    <b-table-column field="imprimir" label="imprimir" sortable>
                        <b-button 
                            @click="dialogImprimir(props.row)"
                            type="is-primary" 
                            outlined>
                            Imprimir
                        </b-button>
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
                <p class="modal-card-title">Guardar nueva pieza</p>
            </header>
            <form v-on:submit.prevent="onSubmitControll">
            <section class="modal-card-body">
                <b-message type="is-danger" v-show="errores.length > 0">
                    <label v-for="error in errores">{{error}}</label>
                </b-message>
                <div class="columns">
                    <div class="column">
                        <b-field label="Talla">
                            <b-select 
                                expanded
                                v-model="addPieza.talla_id"
                                placeholder="Selecciona una talla">
                                <option
                                    v-for="talla in tallas"
                                    :value="talla.id"
                                    :key="talla.id">
                                    {{ talla.nombre }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Color">
                            <b-select 
                                expanded
                                v-model="addPieza.color_id"
                                placeholder="Selecciona un color">
                                <option
                                    v-for="color in colores"
                                    :value="color.id"
                                    :key="color.id">
                                    {{ color.nombre }}
                                </option>
                            </b-select>
                        </b-field>
                    </div>
                    <div class="column">
                        <b-field label="Existencia">
                            <b-input 
                                required
                                :disabled="loadingModal"
                                type="numeric"
                                icon="shipping-fast"
                                icon-pack="fas"
                                placeholder="Existencia"
                                v-model="addPieza.existencia">
                            </b-input>
                        </b-field>
                    </div>
                </div>
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
    <div ref="etiquetas" style="display:none">
        <div v-for="etiqueta in rowPdf">
            {{etiqueta.producto.nombre | truncate(20)}}<br>Talla 
            {{etiqueta.talla.nombre}}<br>Precio 
            $ MXN {{etiqueta.producto.precio_publico | formatNumber()}}<br>
            <barcode style="width:46px" 
                tag="img" 
                :value="etiqueta.barcode" 
                :options="barcodeOptions">
            </barcode>
        </div>
    </div>
</div>    
</template>
<script>
    import jsPDF from 'jspdf'
    import VueBarcode from '@chenfengyuan/vue-barcode';
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
                addPieza: {
                    id: '',
                    barcode: ''
                },
                loadingModal: false,
                errores: [],
                colores: [],
                tallas: [],
                rowPdf: [],
                barcodeOptions: {
                    displayValue: true,
                    width: 1,
                    height: 60,
                    fontSize: 15,
                    flat: true
                },
                margins: {
                    top: 10,
                    bottom: 10,
                    left: 30,
                    width: 522
                }
            }
        },
        methods: {
            dialogImprimir(row){
                this.$dialog.prompt({
                    message: `Cuántas etiquetas?`,
                    inputAttrs: {
                        type: 'number',
                        placeholder: 'Cantidad',
                        maxlength: 2,
                        min: 1
                    },
                    onConfirm: (value) => this.generatePDF(row, value)
                })
            },
            generatePDF(row, value){
                this.rowPdf = []
                for (let i = 0; i < value; i++) { 
                    this.rowPdf.push(row)
                }
                this.$snackbar.open({
                    duration: 5000,
                    message: 'Se ha preparado el PDF, ahora lo puede descargar',
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'Descargar',
                    indefinite: false,
                    onAction: () => this.descargarPDF(row)
                })
            },
            descargarPDF(row){
                let pdfName = row.barcode + 'etiquetas'
                const doc = new jsPDF({
                    format: [612, 210]
                });

                doc.setFont('courier')

                const contentHtml = this.$refs.etiquetas.innerHTML;
                doc.fromHTML(contentHtml, 15, 10, {
                    width: 522
                }, function(dispose){
                    doc.save(pdfName + '.pdf');
                }, this.margins);
            },
            nuevoClick(){
                this.modalForm = true
                this.addPieza.color_id = ''
                this.addPieza.talla_id = ''
                this.addPieza.existencia = ''
                this.addPieza.producto_id = ''
                this.addPieza.barcode = ''
                this.errores = []
            },
            editClick(row){
                this.errores = []
                this.modalForm = true
                this.addPieza = Object.assign({}, row)
            },
            deleteClick(row){
                let message = 'Estás seguro de eliminar la pieza? '
                            + '<b>'+row.barcode+'?</b>'
                this.$dialog.confirm({
                    title: 'Eliminar pieza',
                    message: message,
                    confirmText: 'Eliminar pieza',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.deleteRow(row)
                })
            },
            deleteRow(row){
                this.$toast.open({
                    message: 'Eiminando pieza...',
                    type: 'is-danger',
                    duration: 1000
                })
                this.loadingModal = true
                this.$http.delete(
                    this.appConfig.$api_url+
                    `/api/piezas?id=`+row.id,
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
                if(this.addPieza.id == '')
                    this.onSubmit()
                else
                    this.onSubmitUpdate()
            },
            onSubmitUpdate(){
                this.loadingModal = true
                this.$http.put(
                    this.appConfig.$api_url+
                    `/api/piezas`, 
                    this.addPieza, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addPieza.barcode
                        this.addPieza.id = ''
                        this.$toast.open({
                            message: 'La pieza se actulizó correctamente',
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
                this.addPieza.producto_id = this.producto_id
                this.$http.post(
                    this.appConfig.$api_url+
                    `/api/piezas`, 
                    this.addPieza, 
                    {emulateJSON:true}
                )
				.then(( {data} ) => {
					this.loadingModal = false
                    if(data.error == false){
                        this.loadTabla()
                        this.modalForm = false
                        this.searchKeyword = this.addPieza.barcode
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
                this.$http.get(this.appConfig.$api_url+`/api/piezas?producto_id=`+this.producto_id)
				.then(( {data} ) => {
					this.loading = false
                    this.data = []
                    data.result.forEach((item) => {
						this.data.push(item)
                    })
                    this.colores = data.colores
                    this.tallas = data.tallas
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
                    this.filtered = item.barcode.toLowerCase().includes(this.searchKeyword.toLowerCase())

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
        props: {
            producto_id: {required:true}
        },
        components: {
            'barcode': VueBarcode
        },
        mounted() {
            this.loadTabla()
        }
    }
</script>
