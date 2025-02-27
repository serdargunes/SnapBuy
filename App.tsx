import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/Screen/HomeScreen/HomeScreen';
import ProductsScreen from './src/Screen/ProductsScreen/ProductsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SellScreen from './src/Screen/SellScreen/SellScreen';
import { ProductProvider } from './src/context/ProductContext/ProductContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProductProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown:false,headerTitle:''}}
        />
        <Stack.Screen name="Product" component={ProductsScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen name ="Sell" component={SellScreen} options={{
        headerTitle:"My cart",
        headerShadowVisible:false,
        headerTintColor:"black",
        headerBackTitle:"",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ProductProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
