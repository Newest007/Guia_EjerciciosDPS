import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Ejercicio1 = () => {
  return (
    <View style={styles.container}>
      <Text>Página de Ejercicio 1</Text>
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

export default Ejercicio1;