import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Ejercicio2 = () => {
  return (
    <View style={styles.container}>
      <Text>Página de Ejercicio 2</Text>
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

export default Ejercicio2;