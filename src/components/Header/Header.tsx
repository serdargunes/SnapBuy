import React from 'react';
import { StyleSheet, View,Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerimage}>
        <Image 
          source={require('../../../assets/collection.jpeg')}  
          style={styles.imageheader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:-100,
    
  },
  containerimage: {
    height:370,
  },
  imageheader: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
