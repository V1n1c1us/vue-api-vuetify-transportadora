import * as types from '@/store/types';

export default {
    [types.MUTATE_SET_SERVICE_PROVIDERS]: (state, serviceProviders) => {
        state.fornecedores = serviceProviders
    }
}

// mutations sempre trabalham com syncronismo... então não se faz requests nelas
// blz
