import React from 'react';
import {  StyleSheet, View, Text, Button } from 'react-native';

export default function Search({item}){
    console.log('Item', item)
    return(
        <View>          
            <Text>{item.cep}</Text>
            <Text>{item.uf}</Text>
            <Text>{item.localidade}</Text>
        </View>
    )
}