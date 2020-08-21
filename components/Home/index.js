import React,{ useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';

export default function Home(){

    const [ cep, setCep ] = useState('');

    

    function BuscarCep(){
        const buscaAPI = `https://viacsep.com.br/ws/${cep}/json/`;
        fetch(buscaAPI)
            .then((response) => response.json()
            .then((data) => console.log(data)))
            .catch(error => console.log(error))
    }

    return (
        <View>
            <Text style={styles.title}>CONSULTA CEP</Text>
            <TextInput 
                style={styles.input}
                onChangeText={text => setCep(text) }
                keyboardType='numeric'
             />

            <TouchableOpacity  onPress={() => BuscarCep()} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>CONSULTAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:36,
        textAlign:"center"
    },
    input:{
        borderColor:'black',
        borderWidth: 1,
        fontSize:20,
        marginTop:70,
        padding:20,
        marginHorizontal:10,
        borderRadius:5
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 5,
        padding:20,
        marginHorizontal:10,
        marginTop:10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})