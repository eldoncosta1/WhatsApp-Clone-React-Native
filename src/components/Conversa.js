import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    ListView
} from "react-native";
import { 
    modificaMensagem,
    enviaMensagem,
    conversaUsuarioFetch
} from '../actions/AppActions';

const imgSend = require('../../imgs/send-message.png')

class Conversa extends Component {

    componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail);
        this.criarFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(this.props.contatoEmail);
        }
        this.criarFonteDeDados(nextProps.conversa);
    }

    criarFonteDeDados(conversa) {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
        this._dataSource = dataSource.cloneWithRows(conversa);
    }

    _enviaMensagem() {        
        const { mensagem, contatoNome, contatoEmail } = this.props;
        this.props.enviaMensagem(mensagem, contatoNome, contatoEmail);
    }

    _renderRow(texto) {    
        
        if(texto.tipo === 'e') {
            return (
                <View style={styles.viewMesageSend}>
                    <Text style={styles.textMesageSend}>{texto.mensagem}</Text>
                </View>
            )
        }
        return (
            <View style={styles.viewMesageReceived}>
                <Text style={styles.textMesageReceived}>{texto.mensagem}</Text>                            
            </View>
        )
    }

    render() {
        return  (
            <View style={styles.grid}>
                <View style={styles.viewContent}>
                    <ListView 
                        enableEmptySections
                        dataSource={this._dataSource}
                        renderRow={this._renderRow}
                    /> 
                </View>
                <View style={styles.viewButtons}>
                    <TextInput 
                        style={styles.txtTextInput} 
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                    />
                    <TouchableHighlight                    
                        onPress={this._enviaMensagem.bind(this)}
                        underlayColor="#fff"
                    >
                        <Image source={imgSend} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,        
        backgroundColor: '#eee4dc',
        padding: 10
    },
    viewContent: {
        flex: 1,
        paddingBottom: 20
    },
    viewButtons: {
        height: 60,
        flexDirection: 'row'
    },
    txtTextInput: {
        flex: 4,
        fontSize: 18,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    viewMesageSend: {
        alignItems: 'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 40
    },
    textMesageSend: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#dbf5b4',
        elevation: 1
    },
    viewMesageReceived: {
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 40

    },
    textMesageReceived: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        backgroundColor: '#f7f7f7',
        elevation: 1
    }

});

const mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid};
    });    
    
    return({
        conversa,
        mensagem: state.AppReducer.mensagem        
    })
}

export default connect(mapStateToProps, {
    modificaMensagem,
    enviaMensagem,
    conversaUsuarioFetch
})(Conversa);