import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha,
    autenticarUsuario 
} from '../actions/AutenticacaoActions';

const bg = require('../../imgs/bg.png');

class formLogin extends Component {    

    _autenticarUsuario() {
        const params = { 
            email: this.props.email, 
            senha: this.props.senha
        }; 

        this.props.autenticarUsuario(params);
    }

    renderBtnEntrar() {
        
        if(this.props.loadingLogin) {
            return ( <ActivityIndicator size="large" /> );
        }
        return(
            <Button title="Entrar" color="#115e54" onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={bg}  >
                <View style={styles.grid} >
                    <View style={styles.contentHeader}>
                        <Text style={styles._headerTitle} >WhatsApp Clone</Text>
                    </View>
                    <View style={styles.contentBody}>
                        <TextInput 
                            value={this.props.email} 
                            style={styles._bodyInputText} 
                            placeholder="Email" 
                            placeholderTextColor="#fff" 
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput 
                            value={this.props.senha} 
                            secureTextEntry 
                            style={styles._bodyInputText} 
                            placeholder="Senha" 
                            placeholderTextColor="#fff" 
                            onChangeText={texto => this.props.modificaSenha(texto)} />
                        
                        <Text style={styles._txtMsgErroLogin}>{this.props.msgErroLogin}</Text>

                        <TouchableHighlight
                            onPress={() => Actions.formCadastro()}
                        >
                            <Text style={styles._bodyText}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                        
                    </View>
                    <View style={styles.contentFooter}>
                        {this.renderBtnEntrar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        msgErroLogin: state.AutenticacaoReducer.msgErroLogin,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
});
export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
})(formLogin);

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    grid: {
        flex: 1,
        padding: 10
    },
    contentHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _headerTitle: {
        fontSize: 25,
        color: '#fff'
    },
    contentBody: {
        flex: 2
    },
    _bodyInputText: {
        fontSize: 20,
        height: 45,
        color: '#fafafa'
    },
    _bodyText: {
        fontSize: 20,
        color: '#fff'
    },
    contentFooter: {
        flex: 2
    },
    _txtMsgErroLogin: {
        fontSize: 18,
        color: '#ff0000'
    }
});