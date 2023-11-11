import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button, SafeAreaView, Image, Alert } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [correo, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //Para Iniciar Sesión
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, correo, password)
            .then((userCredential) => {
                console.log('Signed In!')
                const user = userCredential.user;
                console.log(user)
                AsyncStorage.setItem('userEmail', correo);
                navigation.navigate('Principal')

            })
            .catch(error => {
                console.log(error)
            })
    };

    //Para registrarse
    const handleCreateAccount = () => {
        if (password === confPass) {

            createUserWithEmailAndPassword(auth, correo, password)
                .then((userCredential) => {
                    console.log('Account created')
                    const user = userCredential.user;
                    console.log(user)
                    Alert.alert('Usuario creado correctamente!');

                })
                .catch(error => {
                    console.log(error)
                    Alert.alert(error.message)
                })
        }
        else {
            Alert.alert('Las contraseñas no coinciden')
        }
    };



}

export default Login;
