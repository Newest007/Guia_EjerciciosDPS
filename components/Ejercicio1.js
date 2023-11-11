import React from "react";
import { useState } from "react";
import { View,Text, Modal, TouchableHighlight, TouchableOpacity, Image,  StyleSheet, TextInput, Alert} from "react-native";
import MaskInput from 'react-native-mask-input';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { differenceInYears } from 'date-fns';


const Ejercicio1 = () => {
  const [openModal, setOpenModal] = useState(false);
  //Dropdown Picker
  const [openPick, setOpenPick] = useState(false);
  const [items, setItems] = useState([
    {label: 'Masculino', value: 'Masculino'},
    {label: 'Femenino', value: 'Femenino'}
  ]);

  //Datepicker
  const [date, setDate]=useState(new Date()); 
  const [show, setShow]=useState(false);
  const [mode, setMode]=useState('date');

  //Calcular la Edad
  const [edad, setEdad] = useState(0);

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    return differenceInYears(hoy, fechaNacimiento);
  };

  const onChange = (event, selectedDate) => {
    // Si el usuario selecciona una fecha
    if (event.type === 'set') {
      // Validar que la fecha seleccionada no sea mayor que el año actual
      if (selectedDate.getFullYear() > 2023) {
        // Puedes mostrar un mensaje de error, ignorar la selección o tomar alguna otra acción
        alert('Por favor, seleccione una fecha válida.');
      } else {
        // La fecha es válida, puedes actualizar el estado
        setDate(selectedDate);
        // Calcular la edad y actualizar el estado
        setEdad(calcularEdad(selectedDate));
      }
    }
  
    // Ocultar el selector de fecha
    setShow(false);
  };
  

  const showMode= (modeToShow)=>{
    setShow(true);
    setMode(modeToShow)
  }

  //Para calculo de Etapa segun la edad
  const determinarEtapaVida = (edad) => {
    if (edad >= 0 && edad <= 5) {
      return "Primera infancia";
    } else if (edad >= 6 && edad <= 11) {
      return "Infancia";
    } else if (edad >= 12 && edad <= 18) {
      return "Adolescencia";
    } else if (edad >= 19 && edad <= 26) {
      return "Juventud";
    } else if (edad >= 27 && edad <= 59) {
      return "Adultez";
    } else {
      return "Persona mayor";
    }
  };
  

  const [nombre, setNombre] = useState(''); 
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState(''); 
  const [dui, setDui] = useState(''); 
  const [nit, setNit] = useState(''); 
  const [direccion, setDireccion] = useState(''); 
  const [movil, setMovil] = useState(''); 
  const [casa, setCasa] = useState(''); 
  const [correo, setCorreo] = useState(''); 

  //Para resetear Campos
  

  //Para css
  const transparent = 'rgba(0,0,0.5)';

  function modal_render() {    
    return (
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View style={styles.modal_1}>
          <View style={styles.modal_inter}>
            <Text style={styles.titulo}>Ingreso de datos del paciente</Text>

            <View style={{ flexDirection: 'row', marginTop:20, }}>

              <View style={{ flex: 1 }}>
                <Text>Nombre:</Text>
                <TextInput
                  placeholder="Nombre"
                  value={nombre}
                  onChangeText={(text) => setNombre(text)} // Actualiza el estado del nombre
                />
                <Text>Genero:</Text>
                <DropDownPicker
                  placeholder="Genero"
                  open={openPick}
                  value={genero}
                  items={items}
                  setOpen={setOpenPick}
                  setValue={setGenero}
                  setItems={setItems}
                  style={styles.drop}
                />
                <Text>NIT:</Text>
                <MaskInput
                  value={nit}
                  onChangeText={(masked, unmasked) => {
                    setNit(masked); // También puedes usar el valor sin máscara (unmasked)
                  }}
                  mask={[ /\d/, /\d/ , /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/ , /\d/, /\d/,'-', /\d/]}
                  keyboardType='numeric'
                />

                <TouchableOpacity
                  style={styles.btn_date}
                  onPress={() => showMode('date')}
                >
                  <Text style={{ color: 'black', fontSize:15}}>Fecha Nacimiento</Text>                  
                </TouchableOpacity>  
                {
                  show &&(
                    <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    onChange={onChange}
                    />
                  )
                }
                <Text >{date.toLocaleDateString()}</Text>
                

                <Text>Telefono Fijo:</Text>
                <MaskInput
                    value={casa}
                    onChangeText={(masked, unmasked) => {
                      setCasa(masked);
                    }}
                    mask={[/[2]/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]}
                    keyboardType='numeric'
                  />

              </View>

              <View style={{ flex: 1,  }}>
                <Text>Apellido:</Text>
                <TextInput
                  placeholder="Apellido"
                  value={apellido}
                  onChangeText={(text) => setApellido(text)} // Actualiza el estado del apellido
                />
                <Text>DUI:</Text>
                <MaskInput
                  value={dui}
                  onChangeText={(masked, unmasked) => {
                    setDui(masked); // También puedes usar el valor sin máscara (unmasked)
                  }}
                  mask={[/\d/, /\d/ , /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,'-',/\d/]}
                  keyboardType='numeric'
                />
                
                <Text>Direccion:</Text>
                <TextInput
                  placeholder="Direccion"
                  value={direccion}
                  onChangeText={(text) => setDireccion(text)} 
                />

                <Text>Correo Electronico:</Text>
                <TextInput
                  placeholder="Correo"
                  value={correo}
                  onChangeText={(text) => setCorreo(text)} 
                />

                <Text>Telefono Movil:</Text>
                <MaskInput
                  value={movil}
                  onChangeText={(masked, unmasked) => {
                    setMovil(masked); // También puedes usar el valor sin máscara (unmasked)
                  }}
                  mask={[/[6-7]/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]}
                  keyboardType='numeric'
                />

                
              </View>
            </View>

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
                  if (
                    nombre === '' ||
                    apellido === '' ||
                    genero === '' ||
                    dui === '' ||
                    nit === '' ||
                    direccion === '' ||
                    date === null ||
                    movil === '' ||
                    casa === '' ||
                    correo === ''
                  ) {                    
                    Alert.alert('Alerta', 'Debes completar todos los datos.');
                  } else {
                    setOpenModal(false);
                    
                  }
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
      <Image style={styles.img} source={require('../src/logo.png')}/>
      <TouchableOpacity
        style={styles.Boton_touch}
        onPress={() => {
          setOpenModal(true);
        }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Nuevo Paciente</Text>
      </TouchableOpacity>
      {modal_render()}
      {/* Mostrar los datos ingresados */}
      {nombre !== '' && apellido !== '' && (
  <View style={styles.container_info}>
  <Text style={styles.text}>Nombre: {nombre}</Text>
  <Text style={styles.text}>Apellido: {apellido}</Text>
  <Text style={styles.text}>Genero: {genero}</Text>
  <Text style={styles.text}>DUI: {dui}</Text>
  <Text style={styles.text}>NIT: {nit}</Text>
  <Text style={styles.text}>Direccion: {direccion}</Text>
  <Text style={styles.text}>Fecha de Nacimiento: {date.toLocaleDateString()}</Text>
  <Text style={styles.text}>Telefono Movil: {movil}</Text>
  <Text style={styles.text}>Telefono Fijo: {casa}</Text>
  <Text style={styles.text}>Correo Electronico: {correo}</Text>
  <Text style={styles.text}>Edad: {edad} años</Text>
  <Text style={styles.text}>Etapa de vida: {determinarEtapaVida(edad)}</Text>
 
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
    borderColor: '#2c278d',
},
Boton_touch:{
    marginTop:20, 
    backgroundColor:'yellow',
    borderRadius:10, 
    padding:10
},
drop:{  
  maxHeight:10,
  maxWidth:125,
  borderColor:'white',
  marginLeft:-10,
  marginTop:-4,
},
btn_date:{
  backgroundColor: '#7cabf7',  
  borderRadius: 5,
  height:30,
  width:135,  
},
container_info: {
  padding: 16,
  backgroundColor: '#f4f4f4',
  borderRadius: 8,
  margin: 16,
},
text: {
  fontSize: 16,
  marginBottom: 8,
},
img:{
  height:100,
  width:300,
}
});

export default Ejercicio1;