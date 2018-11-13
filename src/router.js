import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import FornecedorHome from '@/components/Fornecedor/Home'
import FornecedorCreate from '@/components/Fornecedor/CreateFornecedor'


Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld    
        },
        {
            path: '/fornecedor/',
            name: 'FornecedorHome',
            component: FornecedorHome
        },
        {
            path: '/fornecedor/create',
            name: 'FornecedorCreate',
            component: FornecedorCreate
        }
    ],
    mode: 'history'
})