import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from './ActionTypes';

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = (params) => {  
    
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(params.email, params.senha)
            .then(user => {
                let emailB64 = b64.encode(params.email);
                //alert(emailB64);
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({nome: params.nome})
                    .then(value => cadastroUsuarioSucesso(dispatch))
                    .catch(erro => alert('Erro ao cadastrar usuário'));                    
                            
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO });
    Actions.boasVindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    
    const type = CADASTRO_USUARIO_ERRO;
    switch(erro.code) {

        case 'auth/email-already-in-use':
            dispatch({ type, payload: 'E-mail já cadastrado' });
            break;
        case 'auth/invalid-email':
            dispatch({ type, payload: 'E-mail inválido' });
            break;
        case 'auth/operation-not-allowed':
            dispatch({ type, payload: 'Usuário sem permissão para acessar o sistema' });
            break;
        case 'auth/weak-password':
            dispatch({ type, payload: 'A senha deve conter no mínimo 6 caracteres' });
            break;
        default:
            dispatch({ type, payload: 'Erro ao realizar cadastro. Verifique sua conexão e tente novamente!' });
            break;
    }    
}

export const autenticarUsuario = (params) => {
    
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(params.email, params.senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }        
}

const loginUsuarioSucesso = (dispatch) => {
    
    dispatch({type: LOGIN_USUARIO_SUCESSO});    
    Actions.principal();
}

const loginUsuarioErro = (erro, dispatch) => {
    
    const type = LOGIN_USUARIO_ERRO;
    
    switch(erro.code) {
        case 'auth/invalid-email':
            dispatch({type, payload: 'E-mail inválido' });
            break;
        case 'auth/user-disabled':
            dispatch({type, payload: 'Usuário desabilitado' });
            break;
        case 'auth/user-not-found':
            dispatch({type, payload: 'Usuário não encontrado' });
            break;
        case 'auth/wrong-password':
            dispatch({type, payload: 'Senha incorreta' });
            break;
        default:
            dispatch({type, payload: 'Usuário ou senha incorretos' });
            break;

    }
    
}