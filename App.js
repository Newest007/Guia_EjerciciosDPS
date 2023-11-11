import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Inicio from './components/Inicio';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Login from './components/Login';
import Registro from './components/Registro';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>      
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
        <Stack.Screen name="Ejercicio1" component={Ejercicio1}/>      
        <Stack.Screen name="Ejercicio2" component={Ejercicio2}/>
        <Stack.Screen name="Ejercicio3" component={Ejercicio3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
