import React from 'react';
import { Text, Button, View, AppRegistry, TouchableOpacity, Image, Alert } from 'react-native';




const gerarNovaFrase = () =>{
var arrayFrase = ['primeira frase','segunda frase','terceira frase','quarta frase','quinta frase'];

var numeroAleatorio = Math.random();
numeroAleatorio = numeroAleatorio*5;
numeroAleatorio = Math.floor(numeroAleatorio);


Alert.alert(arrayFrase[numeroAleatorio]);
};


//criar componente
const App = () => {

	const { principal, botao, textoBotao } = Estilos;


	return(


		<View style={principal}>
			<Image source={require('./app/imgs/logo.png')}/>
				<TouchableOpacity onPress={gerarNovaFrase} style={botao}>
					<Text style={textoBotao}>Nova Frase</Text>
				</TouchableOpacity>
		</View>

		
		);
};




//Estilos
const Estilos = {

	principal:{		
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	botao:{		
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
		
	},
	textoBotao:{		
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		
	},


};


AppRegistry.registerComponent('app1', () => App);