import Vue from 'vue';
import Vuex from 'vuex';
import fornecedores from './modules/fornecedores'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        fornecedores
    }
})