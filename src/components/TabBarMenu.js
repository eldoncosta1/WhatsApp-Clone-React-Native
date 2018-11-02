import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    habilitaInclusaoContato
} from '../actions/AppActions';

const imgAdicionarContato = require('../../imgs/adicionar-contato.png');

const TabBarMenu = props => (
    <View style={styles.viewMain }>
        <StatusBar backgroundColor="#114d44" />

        <View style={styles.menuHeader}>
            <View style={styles.viewHeader}>
                <Text style={styles.textTitle}>WhatsApp Clone</Text>
            </View>

            <View style={styles.viewContent}>
                <View style={styles.viewContentImg}>
                    <TouchableHighlight
                        onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }}
                        underlayColor="#114d44"
                    >
                        <Image source={imgAdicionarContato} />
                    </TouchableHighlight>
                </View>
                <View style={styles.viewContentText}>
                    <Text style={styles.textViewContentText}>Sair</Text>
                </View>
            </View>
        </View>

        <TabBar style={styles.tabBar} {...props} />
    </View>
);

const styles = StyleSheet.create({
    viewMain: {
        backgroundColor: '#115e54',
        elevation: 4,
        marginBottom: 6
    },
    viewHeader: {
        height: 50,
        justifyContent: 'center'
    },
    textTitle: {
        color: '#fff',
        marginLeft: 20,
        fontSize: 20
    },
    tabBar: {
        backgroundColor: '#115e54',
        elevation: 0
    },
    viewContent: {
        flexDirection: 'row',
        marginRight: 20
    },
    viewContentImg: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContentText: {
        justifyContent: 'center'
    },
    textViewContentText: {
        fontSize: 20,
        color: '#fff'        
    },
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default connect(null, {
    habilitaInclusaoContato
})(TabBarMenu);