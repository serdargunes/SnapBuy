import React from 'react'
import {ScrollView,Text } from 'react-native'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import ProductsDetail from '../../components/ProductsDetail/ProductsDetail'

function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <ProductsDetail />
      
    </ScrollView>
  )
}

export default HomeScreen