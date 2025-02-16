import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

function Banner() {
  return (
    <View style = {styles.container}>
        <Text style = {styles.text1}>Winter collection</Text>
        <Text style = {styles.text2}>32</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        flexDirection:'row',

    },
    text1:{
        fontSize:40,
        fontWeight:'500',
    },
    text2:{
        padding:6,
        fontSize:23,
        marginBottom:15,
        fontWeight:'300'
    },
})

export default Banner