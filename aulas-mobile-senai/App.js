import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import React from 'react';



const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#ffd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contador: {
    fontSize : 72,
    color: '#00FF00'
  },
  h1: {
    fontSize : 60,
    color: '#'
  },
  botao: {
    backgroundColor: 'red',
    padding: 10
  },
});

export default function App() {
  const [Contador,setContador] = React.useState(0)


    

  return (
    <View style={styles.tudo}>
      <TouchableOpacity onPress={()=> setContador(Contador-1)} >
      <Text></Text>
      <Text style={styles.h1} >contador : </Text>
      <Text style={styles.contador} > {Contador} </Text>
      </TouchableOpacity>
      <Text style={styles.botao} > - </Text>
      <StatusBar style="auto" />
    </View>
  );
}
