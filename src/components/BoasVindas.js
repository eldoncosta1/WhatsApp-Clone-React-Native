import React from 'react';
import { 
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from "react-native";
import { Actions } from 'react-native-router-flux';

const logo = require('../../imgs/logo.png');
const bg = require('../../imgs/bg.png');

export default props => (
    <ImageBackground style={{flex: 1}} source={bg} >
        <View style={styles.grid}>
            <View style={styles.gridHeader}>
                <Text style={styles._textHeader}>Seja Bem-Vindo</Text>
                <Image source={logo} />
            </View>        
            <View style={styles.gridBody}>
                <Button 
                    title="Login"
                    color="#115e54"
                    onPress={() => Actions.formLogin()}
                />
            </View>
        </View>
    </ImageBackground>

);

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        padding: 15
    },
    gridHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _textHeader: {
        fontSize: 20,
        color: '#fff',
        paddingBottom: 10
    },
    gridBody: {
        flex: 1
    }
})