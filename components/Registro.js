import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Registro=()=> {
    const [correo, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const handleCreateAccount = () => {
        if (password === confPassword) {
            createUserWithEmailAndPassword(auth, correo, password)
                .then((userCredential) => {
                    console.log('Account created')
                    const user = userCredential.user;
                    console.log(user)
                    Alert.alert('Usuario creado correctamente!');
                    navigation.navigate('Inicio')
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require("../src/udb.jpg")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      
        <TextInput
          style={styles.TextInput}
          placeholder="Contraseña"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />        
       
        <TextInput
          style={styles.TextInput}
          placeholder="Repite tu contraseña"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setConfPassword(password)}
        />        
       
      <TouchableOpacity onPress={handleCreateAccount} style={styles.loginBtn}>
        <Text style={styles.loginText}>Registrarme</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
export default Registro;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop:-180,
    height: 200,
    width:150
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor:"#88C0D0",
    color:'black',
    textAlign:'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#908dc2",
  },
});