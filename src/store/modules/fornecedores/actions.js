import * as types from '@/store/types';
import axios from 'axios';

export default {
    [types.ACTION_SET_SERVICE_PROVIDERS]: async ({ commit }) => {
        await axios.get("http://transportadora.test/api/teste")
        .then(res => res.data)
        .then(data => {
            commit(types.MUTATE_SET_SERVICE_PROVIDERS, data);
        })
        .catch(error => {
            commit(types.MUTATE_SET_SERVICE_PROVIDERS, []);
            return error;
        })
    },
    [types.ACTION_SAVE_SERVICE_PROVIDERS]: async ({dispatch}, data) => {
        await axios.post("http://transportadora.test/api/create", data)
                .then(res => res.data)
                .then(data => {
                    dispatch(types.ACTION_SET_SERVICE_PROVIDERS).then(() => {
                        return data;
                    })
                })
                .catch(error => {
                    return error;
                });
    }
}

// `aqui a gente tem umas coisas que eu uso como async/await.. pq... eu quero esperar a Promise ser cumprida... e por isso eu uso esse conceito
// só que não da pra fazer nas mutations, pq elas são apenas síncronas.. hmmmm saquei `
// chrome