import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    View,
    Text,
    ListView,
    TouchableHighlight,
    StyleSheet
} from "react-native";
import { Actions } from 'react-native-router-flux';
import {     
    conversasUsuarioFetch
} from '../actions/AppActions';

class Conversas extends Component { 
    
    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criarFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {        
        this.criarFonteDeDados(nextProps.conversas);
    }

    criarFonteDeDados(conversas) {
        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this._dataSource = dataSource.cloneWithRows(conversas);
    }

    _renderRow(contato) {
        return (
            <TouchableHighlight
                underlayColor="#ccc"
                onPress={() => Actions.conversa({title: contato.nome ,contatoNome: contato.nome, contatoEmail: contato.email })}
            >
                <View style={styles.viewGrid}>            
                    <Text style={styles.textView}>{contato.nome}</Text>                    
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this._dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   viewGrid: {
        flex: 1,
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#ccc"
   },
   textView: {
        fontSize: 25,
        marginBottom: 5
   },
   textEmailView: {
       fontSize: 18
   }
});

const mapStateToProps = state => {

    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid};
    });

    return ({
        conversas
    })
}

export default connect(mapStateToProps, {
    conversasUsuarioFetch
})(Conversas);