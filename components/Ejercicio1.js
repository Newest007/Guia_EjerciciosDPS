import React from 'react';
import { View,Text, Modal, TouchableHighlight, TouchableOpacity, Image,  StyleSheet, TextInput} from "react-native";


const Ejercicio1 = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [nombre, setNombre] = React.useState(''); 
  const [apellido, setApellido] = React.useState('');
  const [genero, setGenero] = React.useState(''); 
  const [dui, setDui] = React.useState(''); 
  const [nit, setNit] = React.useState(''); 
  const [direccion, setDireccion] = React.useState(''); 
  const [nacimiento, setNacimiento] = React.useState(''); 
  const [movil, setMovil] = React.useState(''); 
  const [casa, setCasa] = React.useState(''); 
  const [correo, setCorreo] = React.useState(''); 

  //Para css
  const transparent = 'rgba(0,0,0.5)';

  function modal_render(navigation) {
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={styles.modal_1}>
          <View style={styles.modal_inter}>
            <Text style={styles.titulo}>Ingreso de datos del paciente</Text>

            <Text>Nombre:</Text>
            <TextInput
              placeholder="Nombre"
              value={nombre}
              onChangeText={(text) => setNombre(text)} // Actualiza el estado del nombre
            />
            <Text>Apellido:</Text>
            <TextInput
              placeholder="Apellido"
              value={apellido}
              onChangeText={(text) => setApellido(text)} 
            />

            <Text>Genero:</Text>
            <TextInput
              placeholder="Genero"
              value={genero}
              onChangeText={(text) => setGenero(text)} 
            />

            <Text>DUI:</Text>
            <TextInput
              placeholder="DUI"
              value={dui}
              onChangeText={(text) => setDui(text)} 
            />

            <Text>NIT:</Text>
            <TextInput
              placeholder="NIT"
              value={nit}
              onChangeText={(text) => setNit(text)} 
            />

            <Text>Direccion:</Text>
            <TextInput
              placeholder="Direccion"
              value={direccion}
              onChangeText={(text) => setDireccion(text)} 
            />

            <Text>Fecha de nacimiento:</Text>
            <TextInput
              placeholder="nacimiento"
              value={nacimiento}
              onChangeText={(text) => setNacimiento(text)} 
            />

            <Text>Telefono Movil:</Text>
            <TextInput
              placeholder="Telefono Movil"
              value={movil}
              onChangeText={(text) => setMovil(text)} 
            />

            <Text>Telefono Fijo:</Text>
            <TextInput
              placeholder="Telefono Fijo"
              value={casa}
              onChangeText={(text) => setCasa(text)} 
            />


            <Text>Correo Electronico:</Text>
            <TextInput
              placeholder="Correo"
              value={correo}
              onChangeText={(text) => setCorreo(text)} // Actualiza el estado del correo
            />
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#EA5F5F',
                  padding: 5,
                  borderRadius: 10,
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: 'red',
                }}
              >
                <Text style={{ color: 'white' }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setOpenModal(false);
                  // Aquí puedes hacer algo con los valores de nombre y correo,
                  // como enviarlos a una API o almacenarlos en un estado global.
                }}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#69C353',
                  padding: 5,
                  borderRadius: 10,
                  marginLeft: 5
                }}
              >
                <Text style={{ color: 'white' }}>Ingresar Paciente</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Clínica Dr. Amaya</Text>
      <TouchableOpacity
  style={styles.Boton_touch}
  onPress={() => {
    setOpenModal(true);
    setNombre('');
    setCorreo('');
  }}
>
        <Text style={{ color: 'black', fontSize: 20 }}>Nuevo Paciente</Text>
      </TouchableOpacity>
      {modal_render()}
      {/* Mostrar los datos ingresados */}
      {nombre !== '' && correo !== '' && (
        <View>
          <Text>Nombre: {nombre}</Text>
          <Text>Correo: {correo}</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container:
  {
    justifyContent:'center',
    alignItems:'center'
  },
  titulo: {
    fontSize: 20,
    alignItems:'center',
    fontWeight:'bold'
  },
  imgini:{
    width:'100%',
    height:200,
    marginVertical:5,
    borderRadius:15
},
tituloinicio:{
    fontWeight: 'bold',
    fontSize:20,
    marginVertical:10
},
modal_1:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'transparent',
},
modal_inter:{
    backgroundColor: 'white',
    padding:15, 
    width:'90%',
    height:500,
    borderRadius:15,
    borderWidth: 1, 
    borderColor: '#2c278d'
},
Boton_touch:{
    marginTop:20, 
    backgroundColor:'yellow',
    borderRadius:10, 
    padding:10
},
});

export default Ejercicio1;