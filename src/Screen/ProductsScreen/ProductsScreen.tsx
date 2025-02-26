import React from 'react'
import {StyleSheet, ScrollView, Text,Image,View, Button, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import ProductsCard from '../../components/ProductsCard/ProductsCard';

function ProductsScreen() {
  return (
   <ScrollView>
    <ProductsCard />
   </ScrollView>
  )
}

export default ProductsScreen;