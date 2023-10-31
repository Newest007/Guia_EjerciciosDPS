import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir al Ejercicio 1"
        onPress={() => navigation.navigate('Ejercicio1')}
      />
      <Button
        title="Ir al Ejercicio 2"
        onPress={() => navigation.navigate('Ejercicio2')}
      />
      <Button
        title="Ir al Ejercicio 3"
        onPress={() => navigation.navigate('Ejercicio3')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Inicio;