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

const Login=()=> {
  const [correo, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        console.log('Signed In!')
        const user = userCredential.user;
        console.log(user)
        //AsyncStorage.setItem('userEmail', correo);
        navigation.navigate('Inicio')

      })
      .catch(error => {
        console.log(error)
        Alert.alert('Usuario no registrado')
    })
  }

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
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />        
       
      <TouchableOpacity onPress={handleSignIn} style={styles.loginBtn}>
        <Text style={styles.loginText}>Iniciar Sesión</Text> 
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.loginBtn}>
        <Text style={styles.loginText}>Registrarme</Text>
      </TouchableOpacity> 
    </View> 
  );
}
export default Login;
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