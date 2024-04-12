
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import CORES from "../../constantes/cores";


const estilos = StyleSheet.create({
    botao: {
        backgroundColor: CORES.PRIMARIA,
        padding: 10
    },
    textoBotao: {
        color: CORES.BRANCA,
    }
});

const Resultado = (props) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={props.onPress} >
            <Text style={estilos.textoBotao}> {'texto'}</Text>
        </TouchableOpacity>
    );
};

export default Resultado;
