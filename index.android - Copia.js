import React  from 'react';
import { Text, Button, View, AppRegistry } from 'react-native';



//Estilos
const Estilos = {
 estiloTexto: {
    fontSize: 60,
    backgroundColor: '#8599D7',
    
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
};

//criar componente
const App = () => {

  const { estiloTexto, estiloView} = Estilos;

  return(

      
<View style={estiloView}>
  <Text style={estiloTexto}>nada</Text>
</View>
    );
};

//Rend para o dispositivo
AppRegistry.registerComponent('app1', () => App);