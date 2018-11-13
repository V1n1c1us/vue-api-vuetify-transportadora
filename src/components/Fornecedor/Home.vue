<template>
    <div>
        <v-container>
            <v-layout align-center justify-center row wrap>
                
                <v-flex xs12 sm6>
                    <v-dialog v-model="dialog" max-width="600px">
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                    label="Nome*"
                    name="nome"
                    v-model="nome"
                    required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                 <v-text-field
                    label="CNPJ*"
                    name="cnpj"
                    v-model="cnpj"
                    required>
                     </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
                    <v-list two-line subheader  v-for="(item, index) in forn" :key="index">
                        <v-list-tile>
                            <v-list-tile-avatar>
                                <v-icon>home</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title> {{ item.nome }}</v-list-tile-title>
                                <v-list-tile-sub-title> {{ item.cnpj}}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn
                                    icon
                                    router
                                    :to="'/fornecedor/create'">
                                    <v-icon color="grey lighten-1">add_circle</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-action>
                                <v-btn
                                    icon
                                     slot="activator"
                                     @click="$root.$emit('open-modal')"
                                     >
                                    <v-icon color="grey lighten-1">create</v-icon>
                                </v-btn>
    
                            </v-list-tile-action>
                            <v-list-tile-action>
                                <v-btn
                                    icon>
                                <v-icon color="grey lighten-1">delete_sweep</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider inset></v-divider>
                    </v-list>
                                                <CreateForm>
                                    <v-btn
                                    icon
                                     slot="activator"
                                     @click="$root.$emit('open-modal')"
                                     >
                                    <v-icon color="grey lighten-1">create</v-icon>
                                </v-btn>
                                </CreateForm>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    
</template>
<script>
import CreateForm from './CreateForm'
import axios from 'axios'
import * as types from '@/store/types';
export default {
    components: {
        CreateForm
    },
    data() {
        return {
            fornecedores: [],
            nome: null,
            cnpj: null,
            dialog: false
        }
    },
    computed: {
        forn() {
            return this.$store.getters[types.GETTER_SERVICE_PROVIDERS];
        }
    },
    mounted () {
        this.$store.dispatch(types.ACTION_SET_SERVICE_PROVIDERS)
    },
    methods: {
        save () {
            const data = {nome: this.nome, cnpj: this.cnpj}
            this.$store.dispatch(types.ACTION_SAVE_SERVICE_PROVIDERS, data).then(data => {
                console.log(data);
                this.dialog = false
            })
        }
    }
}
</script>

<!-- mais fácil aqui...
pensa assim...
vc precisaria fazer uma nova requisição no momento em que cadastrasse o novo fornecedor para 
atualizar os dados entende...

sim sim.. entnedi.. ai pra isso, seria necessário usar o vuex, certo?
eu acho que seria melhor....essa sua app é muito grande?

então, comecei a pouco.. vou te mostrar..

seria isso.. tenho um cadastro do fornecedor.. que é esse que comecei a implementar no vue
e outro, pra cadastrar um produto.. que ai, tem upload de imagem e tal.. seria isso.. 
relativamente uma app pequena.. só pra estudo mesmo... entendi
eu mesmo não sei como implementar o cruzamento de dados sem vuex... eu acho que é pq comecei com
ele...  mas faz assim... vamos instalar o vuex e vc começa a mapear os dados...
ahh bllzz
pode usar direto ai
tinha travado... cada um mapea as funcionalidades de um jeito... eu fiz pelo curso do maximilian
então sai mais ou menos-->