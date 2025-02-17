import React from 'react'
import {StyleSheet, ScrollView, Text,Image,View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

function ProductsScreen() {
  return (
    <ScrollView>
        <View>
            <Image style = {styles.image} source={require('../../../assets/candle.jpeg')}/>
        </View>
        <View style = {styles.titlebox}>
        <Text style = {styles.title}>New Year's toy deer</Text>
        <Text style = {styles.star}><AntDesign name="star" size={24} color="orange" /></Text>
        <Text style = {styles.puan}>4.9</Text>
        </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    image:{
        height:450,
    },
    titlebox:{
        marginTop:20,
        marginLeft:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },

    title:{
        fontSize:25,
        fontWeight:'500',
        
    },
    star:{
        marginLeft:90,
    },
    puan:{
        marginLeft:8,
        fontSize:25,
        fontWeight:'500',
    },

})
export default ProductsScreen