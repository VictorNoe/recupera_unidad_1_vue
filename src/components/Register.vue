<template lang="">
    <b-row>
        <b-col class="mt-3">
            <b-breadcrumb>
                <b-breadcrumb-item @click="sendList">Home</b-breadcrumb-item>
                <b-breadcrumb-item active>Register</b-breadcrumb-item>
            </b-breadcrumb>
            <b-form @submit="registerUser">
                <div>
                    <label>Nombre</label>
                    <b-form-input type="text" v-model="nombre" :state="nombreStatus"></b-form-input>
                    <b-form-invalid-feedback :state="nombreStatus">Solo se admiten letras</b-form-invalid-feedback>
                </div>
                <div>
                    <label>Edad</label>
                    <b-form-input type="number" v-model="edad" :state="edadStatus"></b-form-input>
                    <b-form-invalid-feedback :state="edadStatus">Solo se aceptan edades del 1 al 100</b-form-invalid-feedback>
                </div>
                <div>
                    <label>Cuatrimestre</label>
                    <b-form-input type="number" v-model="cuatrimestre" :state="cuatrimestreStatus"></b-form-input>
                    <b-form-invalid-feedback :state="cuatrimestreStatus">Solo se aceptan cuatrimestres del 1 al 12</b-form-invalid-feedback>
                </div>
                <div>
                    <label>Carrera</label>
                    <b-form-input type="text" v-model="carrera" :state="carreraStatus"></b-form-input>
                    <b-form-invalid-feedback :state="carreraStatus">Solo se admiten letras</b-form-invalid-feedback>
                </div>
                <div class="mt-3">
                    <b-button variant="primary" type="submit">Registrar</b-button>
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>
<script>
export default {
    data() {
        return {
            nombre: '',
            edad: 0,
            cuatrimestre: 0,
            carrera: '',
            nombreStatus: null,
            edadStatus: null,
            cuatrimestreStatus: null,
            carreraStatus: null,
            data: [],
        }
    },
    methods: {
        validateText(message) {
            const validate = /^([A-Za-z ])+$/
            if (validate.test(message)){
                return true;
            }
            return false;
        },
        validateEdad(){
            const validate = /^([0-9])+$/
            if(validate.test(this.edad) && this.edad >= 1 && this.edad <= 100) {
                return true;
            }
            return false;
        },
        validateCuatrimestre(){
            const validate = /^([0-9])+$/
            if(validate.test(this.cuatrimestre) && this.cuatrimestre >= 1 && this.cuatrimestre <= 12) {
                return true;
            }
            return false;
        },
        sendList() {
            this.$router.push({
                name: 'home',
                params: { data: this.data }
            })
        },
        registerUser(event) {
            event.preventDefault();
            this.nombreStatus = this.validateText(this.nombre);
            this.edadStatus = this.validateEdad();
            this.cuatrimestreStatus = this.validateCuatrimestre();
            this.carreraStatus = this.validateText(this.carrera);

            console.log(this.nombreStatus);

            if(!this.nombreStatus || !this.edadStatus || !this.cuatrimestreStatus || !this.carreraStatus) {
                return;
            }

            let id = this.data.length + 1
            const student = {
                "Nombre": this.nombre,
                "Edad": this.edad,
                "cuatrimestre": this.cuatrimestre,
                "carrera": this.carrera,
                "ID": id
            }
            this.data.push(student)
            this.sendList()
        }
    },
    created() {
        if (this.$route.params.data) {
            this.data = this.$route.params.data
        }
    },
}
</script>
<style lang="">

</style>