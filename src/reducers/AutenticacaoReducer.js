import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    msgErroCadastro: '',
    msgErroLogin: ''
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload }        
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload }        
        case MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_ERRO:
            return { ...state, msgErroCadastro: action.payload }        
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '' }
        case LOGIN_USUARIO_ERRO:
            return { ...state, msgErroLogin: action.payload }
        default:
            return state;
    }
    
}