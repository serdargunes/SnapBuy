import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import productList from '../../../assets/ProductsList'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')
interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

function ProductsDetail({ product }: { product: Product }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { product })}>
        <View style={styles.imagecontainer} >
            <Image style={styles.images} source={{ uri: product.image }} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            
        </View>
    </TouchableOpacity>
    
    )
}
const styles = StyleSheet.create({
    imagecontainer: {
        marginTop: 20,
        marginLeft: 16,
        marginRight: -5,
    },
    images: {
        width: width * 0.45,
        height: width * 0.45,
    },
    title: {
        marginTop:7,
        fontSize:16,
        opacity:0.7,
    },
    price: {
        fontSize:14,
        fontWeight:'600'
    },
})

export default ProductsDetail;