import React from 'react'
import {ScrollView,Text } from 'react-native'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import ProductsDetail from '../../components/ProductsDetail/ProductsDetail'
import Products from '../../components/Products/Products'
import TabView from '../../components/TabView/TabView'


function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <TabView />
      <Products />
      
      
    </ScrollView>
  )
}

export default HomeScreen