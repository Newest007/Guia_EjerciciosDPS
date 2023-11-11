import React from 'react';
import { View, Image, Text} from 'react-native';
import { Button } from 'react-native-elements';

const Inicio = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:40 }}>

<Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#3498db' }}>
        Bienvenido a la Guía de Ejercicios DPS
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 40, textAlign: 'center', color: '#2c3e50' }}>
        Seleccione un Ejercicio
      </Text>

      <Button
        title="Ir al Ejercicio 1"
        onPress={() => navigation.navigate('Ejercicio1')}
        buttonStyle={{
          backgroundColor: '#3498db', // Puedes cambiar este color según tus preferencias
          width: 200,
          marginBottom: 20,
        }}
      />
      <Button
        title="Ir al Ejercicio 2"
        onPress={() => navigation.navigate('Ejercicio2')}
        buttonStyle={{
          backgroundColor: '#e74c3c', // Puedes cambiar este color según tus preferencias
          width: 200,
        }}
      />
    </View>
  );
};

export default Inicio;
