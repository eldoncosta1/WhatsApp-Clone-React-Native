import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {

    componentWillMount() {
        let config = {
            apiKey: "AIzaSyCNxEXcQRHQPHTIKtxIkctyt5EM9CbiI_s",
            authDomain: "whatsapp-clone-react-native.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-react-native.firebaseio.com",
            projectId: "whatsapp-clone-react-native",
            storageBucket: "whatsapp-clone-react-native.appspot.com",
            messagingSenderId: "665278536467"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Routes />
            </Provider>
        );
    }     
}
