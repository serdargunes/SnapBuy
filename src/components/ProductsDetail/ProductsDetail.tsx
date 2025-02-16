import React from 'react'
import { View,StyleSheet,Text,Image, TouchableOpacity, Dimensions } from 'react-native'
const {width,height} = Dimensions.get('window')
function ProductsDetail() {
    
  return (
    <TouchableOpacity>
        <View style ={styles.imagecontainer} >
            <Image style = {styles.image} source={require('../../../assets/glasspiecone.jpeg')}/>
            <Text>Glass pinecone</Text>
            <Text>$7.50</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    imagecontainer:{
        marginTop:20,
        marginLeft:20,
    },
    image:{
        width: width*0.45,
        height:width*0.45,
    },
})

export default ProductsDetail