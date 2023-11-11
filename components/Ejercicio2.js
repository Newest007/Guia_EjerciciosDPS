import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, Alert, TextInput, Image } from 'react-native';
import { SvgUri, SvgWithCssUri } from 'react-native-svg';

const Ejercicio2 = () => {
    const [direccionIP, setDireccionIP] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleInputChange = (text) => {
        setDireccionIP(text);
    };
    
    const consultarAPI = () => {
        // Reemplaza la URL con la dirección de tu API y ajusta la lógica según sea necesario
        const apiUrl = `http://ipwho.is/${direccionIP}`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setResultado(data);
          })
          .catch((error) => {
            console.error('Error al consultar la API:', error);
          });
    };


    return (
      <>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese la dirección IP"
                onChangeText={handleInputChange}
                value={direccionIP}
            />
            <Button title="Consultar API" onPress={consultarAPI} />
        
            {resultado && (
                <View style={styles.resultadoContainer}>
                <Text>Resultado de la API:</Text>
                <Text>Tipo de IP:</Text>
                <Text>{resultado.type}</Text>
                <Text>Continente:</Text>
                <Text>{resultado.continent}</Text>
                <Text>País perteneciente:</Text>
                <Text>{resultado.country}</Text>
                <Text>Código del país:</Text>
                <Text>{resultado.country_code}</Text>
                <Text>Región:</Text>
                <Text>{resultado.region}</Text>
                <Text>Ciudad:</Text>
                <Text>{resultado.city}</Text>
                <Text>Capital:</Text>
                <Text>{resultado.capital}</Text>
                <Text>{resultado.flag.img}</Text>
                <Image
                  uri={resultado.flag.img}
                  />
                <SvgUri
                  width={300}
                  height={400}
                  style={styles.svgImage}
                  uri={resultado.flag.img}
                  />
                <Text>Hora Actual:</Text>
                <Text>{resultado.timezone.current_time}</Text>
                <Text>Datos de Conexión:</Text>
                <Text>ISP {resultado.connection.isp}</Text>
                <Text>ORG {resultado.connection.org}</Text>
                <Text>Dominio {resultado.connection.domain}</Text>
                </View>
                )}
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultadoContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  svgImage: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default Ejercicio2;