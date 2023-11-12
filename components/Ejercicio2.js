import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, Alert, TextInput, Image, ScrollView } from 'react-native';
import { SvgUri, SvgWithCssUri } from 'react-native-svg';
import { TextInputMask } from 'react-native-masked-text';

const Ejercicio2 = () => {
    const [direccionIP, setDireccionIP] = useState('');
    const [resultado, setResultado] = useState(null);
    const ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;

    const handleInputChange = (text) => {
      //if (ipRegex.test(text)) {
        setDireccionIP(text);
      //}
      //else{
        //Alert.alert('No estas proporcionando una ip válida')
        //setDireccionIP('')
      //}
    };

    /*
    const consultarAPI = () => {
      
        const apiUrl = `http://ipwho.is/${direccionIP}`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setResultado(data);
          })
          .catch((error) => {
            console.error('Error al consultar la API:', error);
        });
      
    };*/

    const consultarAPI = () => {
      const apiUrl = `http://ipwho.is/${direccionIP}`;
      if (ipRegex.test(direccionIP) || direccionIP=='') {
        fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error de la API: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Validar la existencia de datos de la api
          if (!data || !data.type || !data.continent || !data.flag.img) {
            throw new Error('Datos incompletos');
          }
          setResultado(data);
        })
        .catch(() => {
          Alert.alert('No existen datos para una ip privada')
          setResultado(null);
        });
      }
      else{
        Alert.alert('Debes de ingresar una ip válida')
        setDireccionIP('')
      }
    };


    return (
      <>
        <ScrollView style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={handleInputChange}
              value={direccionIP}
              keyboardType="numeric"
              placeholder='Ingresa la dirección IP'
            />
            <Button title="Consultar API" onPress={consultarAPI} />
        
            {resultado && (
                <View style={styles.resultadoContainer}>
                <Text>Resultado de la API:</Text>
                <Text>Tipo de IP: {resultado.type}</Text>
                <Text>Continente: {resultado.continent}</Text>
                <Text>País perteneciente: {resultado.country}</Text>
                <Text>Código del país: {resultado.country_code}</Text>
                <Text>Región: {resultado.region}</Text>
                <Text>Ciudad: {resultado.city}</Text>
                <Text>Capital: {resultado.capital}</Text>
                <SvgUri
                  width={300}
                  height={400}
                  style={styles.svgImage}
                  uri={resultado.flag.img}
                />
                <Text>Hora Actual: {resultado.timezone.current_time}</Text>
                <Text>Datos de Conexión:</Text>
                <Text>ISP = {resultado.connection.isp}</Text>
                <Text>ORG = {resultado.connection.org}</Text>
                <Text>Dominio = {resultado.connection.domain}</Text>
                </View>
                )}
        </ScrollView>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultadoContainer: {
    marginTop: 20,
    justifyContent:'center',
    alignItems:'justify',
    padding: 40,
  },
  input: {
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  svgImage: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Ejercicio2;