import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_EM_ANDAMENTO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO
} from '../actions/ActionTypes';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    msgErroCadastro: '',
    msgErroLogin: '',
    loadingLogin: false,
    loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };        
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };        
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
        case CADASTRO_EM_ANDAMENTO:
            return { ...state, loadingCadastro: true, msgErroCadastro: '' };
        case CADASTRO_USUARIO_ERRO:
            return { ...state, msgErroCadastro: action.payload, loadingCadastro: false };        
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastro: false };
        case LOGIN_USUARIO_SUCESSO:
            return { ...state, loadingLogin: false };
        case LOGIN_USUARIO_ERRO:
            return { ...state, msgErroLogin: action.payload, loadingLogin: false };
        case LOGIN_EM_ANDAMENTO:
            return { ...state, msgErroLogin: '', loadingLogin: true };
        default:
            return state;
    }
    
}