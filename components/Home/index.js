import React,{ useState } from 'react';

import { Text, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';

export default function Home(){

    const [ cep, setCep ] = useState('')


    return (
        <>
            <Text style={styles.title}>CONSULTA CEP</Text>
            <TextInput style={styles.input} />

            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText} >CONSULTAR</Text>
            </TouchableOpacity>
        </>
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