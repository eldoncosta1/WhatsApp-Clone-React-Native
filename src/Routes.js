import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';

export default props => (
    <Router 
        navigationBarStyle={{ backgroundColor: '#115e54' }} titleStyle={styles.navTitle}
    >
        <Scene key="root"  >
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar titleStyle={styles.navigationBarTitleStyle} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" titleStyle={styles.navigationBarTitleStyle} />
            <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar titleStyle={styles.navigationBarTitleStyle} />
            <Scene key='principal' component={Principal} title="Home" hideNavBar titleStyle={styles.navigationBarTitleStyle}  />
            <Scene key='adicionarContato' component={AdicionarContato} title="Adicionar Contato" hideNavBar={false} titleStyle={styles.navigationBarTitleStyle} />
            <Scene key='conversa' component={Conversa} title="Conversa" hideNavBar={false} titleStyle={styles.navigationBarTitleStyle} />
        </Scene>
    </Router>
);

const styles = StyleSheet.create({    
    navigationBarTitleStyle: {
        // centering for Android
        flex: 1,
        /*textAlign: 'center',*/
        color: '#fff'
    },
    navTitle: {
      color: '#fff', // changing navbar title color
    },
    /*routerScene: {
      paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },*/
  })