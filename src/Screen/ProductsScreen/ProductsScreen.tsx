import React from 'react'
import {StyleSheet, ScrollView, Text,Image,View, Button, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

function ProductsScreen() {
  return (
    <ScrollView>
        <View>
            <Image style = {styles.image} source={require('../../../assets/toydeer.jpeg')}/>
        </View>
        <View style = {styles.titlebox}>
        <Text style = {styles.title}>New Year's toy deer</Text>
        <Text style = {styles.star}><AntDesign name="star" size={24} color="orange" /></Text>
        <Text style = {styles.puan}>4.9</Text>
        </View>
        <View>
            <Text style = {styles.explanation} numberOfLines={5} ellipsizeMode='tail'>Celebrate the New Year with this beautifully crafted wooden toy deer! Made from high-quality wood, this charming decoration adds a touch of rustic elegance to your festive décor. Its smooth finish and intricate detailing make it a perfect centerpiece or a delightful gift for loved ones</Text>
        </View>
        <View style = {styles.addtocartContainer}>
            <Text style={styles.addtocartPrice} >$12.99</Text>
            <TouchableOpacity style = {styles.button}>
            <Text style = {styles.addtocartText}>Add to cart</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    image:{
        width:500,
        height:500,
        
    },
    titlebox:{
        marginTop:20,
        marginLeft:-5,
        flexDirection:'row',
        justifyContent:'center',
        
        
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
    explanation:{
        fontSize:17,
        fontWeight:'500',
        marginTop:10,
        marginLeft:20,
        justifyContent:'center',
        width:400,
    },
    addtocartContainer:{
        backgroundColor:'white',
        marginTop:40,
        flexDirection:'row',
        height:130,
        justifyContent:'center',
        alignItems:'center',

    },
    addtocartPrice:{
        fontSize:30,
        fontWeight:'500',
        marginLeft:40,
        
    },
    button:{
        fontSize:30,
        backgroundColor:'black',
        marginLeft:65,
        borderRadius:40,
        height:70,
        width:280,
        justifyContent:'center',
        alignItems:'center',
        marginRight:30,
        
    },
    addtocartText:{
        fontSize:30,
        color:'white',

    },
})
export default ProductsScreen