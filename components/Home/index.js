import React,{ useState } from 'react';

import
{
    View,
    Text,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native';

export default function Home(){

    const [ cep, setCep ] = useState('');
    const [ cepSearch, setCepSearch] = useState([]);
    const [ mostraList, setmostraList ] = useState(false)    

    
    function BuscarCep(){

        if(cep.trim() === ''){           
             Alert.alert(
                "ERRO",
                "CEP não pode ser vazio"
            )
            return;
        }


        const buscaAPI = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(buscaAPI)
            .then((response) => response.json()
            .then(data => {
                setCepSearch(data)
                setmostraList(true)
                Keyboard.dismiss()
            }))
            .catch(error => {                
                Alert.alert(
                    "ERRO",
                    "ERRO AO BUSCAR CEP"
                )
                console.log(error)
            })   
    }

    function encerrarTeclado(){
        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={() => encerrarTeclado()}>
            <View>
                <Text style={styles.title}>CONSULTA CEP</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={text => setCep(text) }
                    keyboardType='numeric'
                    maxLength={8}
                />

                <TouchableOpacity  onPress={() => BuscarCep()} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>CONSULTAR</Text>
                </TouchableOpacity>

            {
                mostraList && (
                    <View style={styles.containerResult}>          
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>CEP: {cepSearch.cep}</Text>
                            <Text style={styles.label}>CIDADE: {cepSearch.localidade}</Text>
                            <Text style={styles.label}>RUA: {cepSearch.logradouro}</Text>
                            <Text style={styles.label}>BAIRRO: {cepSearch.bairro}</Text>
                            <Text style={styles.label}>UF: {cepSearch.uf}</Text>
                        </View>
                    </View>
                )
            }
            </View>
        </TouchableWithoutFeedback>

        
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
      },
      containerResult: {         
          backgroundColor:'#08A0EB',
          height:270,
          marginTop:50,
          borderRadius:10,
          marginHorizontal:5, 
      },
      labelContainer:{
       display:"flex",
       marginVertical:20,
       margin:10
      },
      label:{
        fontSize:25,
        color:'white',
        
      },
  
    
})