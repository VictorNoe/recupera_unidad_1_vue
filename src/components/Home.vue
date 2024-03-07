<template lang="">
    <b-row>
        <b-col class="mt-3">
            <b-breadcrumb>
                <b-breadcrumb-item active>Home</b-breadcrumb-item>
            </b-breadcrumb>
            <b-button variant="primary" @click="sendList" class="mb-3 mt-3">Registrar</b-button>
            <div class="overflow-auto">
                <b-table
                striped 
                hover
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                :fields="fields"
                small
                ></b-table>

                <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                align="center"  
                ></b-pagination>

                <p class="mt-3 text-center">Current Page: {{ currentPage }}</p>
            </div>
        </b-col>
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            items: [
                {
                    "Nombre": "Juan",
                    "Edad": 20,
                    "cuatrimestre": 3,
                    "carrera": "Ingeniería Civil",
                    "ID": 1
                },
                {
                    "Nombre": "María",
                    "Edad": 22,
                    "cuatrimestre": 5,
                    "carrera": "Medicina",
                    "ID": 2
                },
                {
                    "Nombre": "Luis",
                    "Edad": 19,
                    "cuatrimestre": 2,
                    "carrera": "Psicología",
                    "ID": 3
                },
                {
                    "Nombre": "Ana",
                    "Edad": 21,
                    "cuatrimestre": 4,
                    "carrera": "Derecho",
                    "ID": 4
                },
                {
                    "Nombre": "Pedro",
                    "Edad": 23,
                    "cuatrimestre": 6,
                    "carrera": "Administración de Empresas",
                    "ID": 5
                }
            ],
            fields: [
                {
                    key: 'Nombre',
                    sortable: true
                },
                {
                    key: 'Edad',
                    sortable: true
                },
                {
                    key: 'cuatrimestre',
                    sortable: true,
                },
                {
                    key: 'carrera',
                    sortable: true,
                },
                {
                    key: 'ID',
                    sortable: true,
                }
            ],
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    methods: {
        sendList() {
            this.$router.push({
                name: 'register',
                params: { data: this.items }
            })
        },
    },
    created() {
        if (this.$route.params.data) {
            this.items = this.$route.params.data
        }
    },
}
</script>
<style lang="">

</style>