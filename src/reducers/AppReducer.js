const INITIAL_STATE = {
    adiciona_contato_email: '',
    msgErroCadastroUsuario: '',
    cadastroResultadoUsuario: false
};

import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO
} from '../actions/ActionTypes';

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload };
        case ADICIONA_CONTATO_ERRO:
            return { ...state, msgErroCadastroUsuario: action.payload };
        case ADICIONA_CONTATO_SUCESSO:
            return { ...state, cadastroResultadoUsuario: action.payload, adiciona_contato_email: '' };
        default:
            return state;
    }
}