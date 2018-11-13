<template>
    <div>
        <v-container>
            <v-layout align-center justify-center row wrap>
                <v-flex xs12 sm6>
                <h3>Create a new fornecedor</h3>
                    <v-form>
                        <v-text-field
                            name="nome"
                            label="Nome"
                            id="idNome"
                            v-model="nome"
                        ></v-text-field>
                        <v-text-field
                            name="cnpj"
                            label="CNPJ"
                            id="idCnpj"
                            v-model="cnpj"
                        ></v-text-field>
                        <v-btn flat small color="primary" @click="save">text</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            fornecedores: {},
            nome: null,
            cnpj: null
        }
    },
    methods: {
        save () {
            var self = this
            axios.post('http://transportadora.test/api/create',{ nome: this.nome, cnpj: this.cnpj})
                 .then(function(response){
                    alert("FOI" + response.data)
                    console.log("Cadastro realizado!!")
                    response.redirect('/fornecedor');
                 })
                 .catch(function(error){
                    console.log("Erro ao cadastrar" + error)
                 })
            
        }
    }
}
</script>

