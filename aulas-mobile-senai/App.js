
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './LoginScreen';
// import CadastroScreen from './CadastroScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Cadastro" component={CadastroScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;











import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BotaoCostumizado from './comum/componentes/BotaoCostumizado/BotaoCostumizado';
import CORES from './comum/constantes/cores';

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: '#Gold',
    padding: 30,
  },
  botao: {
    backgroundColor: 'red',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    
  },
  botaoTexto: {
    fontSize: 48,
    color: '#fff',
  },
  botao1 : {
    margin: 100,
  }
});

export default function App() {
  const [contador, setContador] = React.useState(0);

  return (


    <View style={estilos.tudo}>

      
      <BotaoCostumizado
        style={estilos.botao}
        onPress={() => setContador(contador - 1)}
      >-</BotaoCostumizado>

      <Text style={estilos.contador}>{contador}</Text>

      <BotaoCostumizado
        style={estilos.botao}
        onPress={() => setContador(contador + 1)}
      >
        +
      </BotaoCostumizado>
      
      <BotaoCostumizado style={estilos.botao} onPress={() => { setContador(0) }} >Limpar </BotaoCostumizado>
      <BotaoCostumizado style={estilos.botao} onPress={()=>{confirm('deseja salvar essa contagem?')}} >salvar</BotaoCostumizado>


      <StatusBar style='auto' />

    </View>
  );
}
