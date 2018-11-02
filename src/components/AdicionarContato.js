import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import {
    modificaAdicionaContatoEmail,
    adicionaContato
} from '../actions/AppActions';

class AdicionarContato extends Component{

    renderAdicionaContato() {

        if(!this.props.cadastroResultadoUsuario) {

            return(
                <View style={{ flex: 1 }}>
                    <View style={styles.viewContent}>
                        <TextInput
                            placeholder='E-mail'
                            style={styles.textInput}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                            value={this.props.adiciona_contato_email}
                        />
                    </View>
                    
                    <View style={styles.viewFooter}>
                        <Button 
                            title="Adicionar" 
                            color="#115e54" 
                            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} 
                        />
            
                        <Text style={styles.txtMsgErro}>
                            {this.props.msgErroCadastroUsuario}
                        </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={{ fontSize: 20}}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            )
        }
    }
    
    render() {
        return (
            <View style={styles.grid}>
                { this.renderAdicionaContato() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    viewContent: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 20,
        height: 45
    },
    viewFooter: {
        flex: 1,
        justifyContent: 'center'
    },
    txtMsgErro: {
        fontSize: 20,
        color: '#ff0000'
    }

});

const mapStateToProps = state => ({
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    msgErroCadastroUsuario: state.AppReducer.msgErroCadastroUsuario,
    cadastroResultadoUsuario: state.AppReducer.cadastroResultadoUsuario

});

export default connect(mapStateToProps, {
    modificaAdicionaContatoEmail,
    adicionaContato
})(AdicionarContato);