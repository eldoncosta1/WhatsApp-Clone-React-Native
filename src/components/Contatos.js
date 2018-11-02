import React, { Component } from 'react';
import { 
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableHighlight
} from "react-native";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {    

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criarFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criarFonteDeDados(nextProps.contatos);
    }

    criarFonteDeDados(contatos) {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this._fonteDeDados = dataSource.cloneWithRows(contatos)
    }

    renderRow(contato) {
        return (
            <TouchableHighlight
                onPress={() => Actions.conversa({title: contato.nome ,contatoNome: contato.nome, contatoEmail: contato.email })}
                underlayColor='#ccc'
            >
                <View style={styles.viewList}>
                    <Text style={styles.txtNameListView}>{contato.nome}</Text>
                    <Text style={styles.txtEmailListView}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this._fonteDeDados}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    viewList: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    txtNameListView: {
        fontSize: 25
    },
    txtEmailListView: {
        fontSize: 18
    }
})


const mapStateToProps = state => {
    
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid}
    })
    return {
        contatos
    }
}

export default connect(mapStateToProps, {
    contatosUsuarioFetch
})(Contatos);