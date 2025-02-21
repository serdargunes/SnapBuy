import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/Screen/HomeScreen/HomeScreen';
import ProductsScreen from './src/Screen/ProductsScreen/ProductsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import SellScreen from './src/Screen/SellScreen/SellScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown:false,headerTitle:''}}
        />
        <Stack.Screen name="Product" component={ProductsScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen name ="Sell" component={SellScreen} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer>

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
