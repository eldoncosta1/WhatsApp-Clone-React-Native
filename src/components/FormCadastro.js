import React, { Component } from 'react';
import {
    View,    
    Text,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

const bg = require('../../imgs/bg.png');

class formCadastro extends Component {

    _cadastraUsuario() {
        const params = {
            nome: this.props.nome,
            email: this.props.email,
            senha: this.props.senha
        };        

        this.props.cadastraUsuario(params);
    }

    renderBtnCadastro() {

        if(this.props.loadingCadastro) {
            return (
                <ActivityIndicator size="large" />
            );
        }

        return (
            <Button title="Cadastrar" color="#115e54" onPress={() => this._cadastraUsuario()} />
        )
    }

    render() {
        return  (
            <ImageBackground style={{flex: 1}} source={bg}  >
                <View style={styles.grid}>
                    <View style={styles.contentBody}>
                        <TextInput 
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor="#fff" 
                            style={styles._bodyInputText}  
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.email} 
                            placeholder="E-mail" 
                            placeholderTextColor="#fff" 
                            style={styles._bodyInputText} 
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput 
                            value={this.props.senha} 
                            secureTextEntry 
                            placeholder="Senha" 
                            placeholderTextColor="#fff" 
                            style={styles._bodyInputText} 
                            onChangeText={texto => this.props.modificaSenha(texto)} />

                        <Text style={styles.txtMsgErro}>{this.props.msgErroCadastro}</Text>

                    </View>
                    <View style={styles.contentFooter}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

const mapStateToProps = state => ({
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    msgErroCadastro: state.AutenticacaoReducer.msgErroCadastro,
    loadingCadastro: state.AutenticacaoReducer.loadingCadastro
});

export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
})(formCadastro);

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        padding: 10
    },      
    contentBody: {
        flex: 4,
        justifyContent: 'center'
    },
    _bodyInputText: {
        fontSize: 20,
        height: 45,
        color: '#fafafa'
    },
    contentFooter: {
        flex: 1
    },
    txtMsgErro:{
        fontSize: 18,
        color: '#ff0000'
    }
});