import React from 'react'
import {StyleSheet, Text,View } from 'react-native'


function TabView() {
  return (
    <View style = {styles.container}>
        <Text >All</Text>
        <Text style = {styles.text}>Candles</Text>
        <Text style = {styles.text}>Lights</Text>
        <Text style = {styles.text}>Tableware</Text>
        <Text style = {styles.text}>Tablecloths</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:15,
        marginBottom:10,
        
    },
    text:{
       fontSize:16,
    },
})

export default TabView