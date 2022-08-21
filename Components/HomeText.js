import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeText = () => {
  return (
    <View style={{flex:1 , marginRight: 'auto'}}>
      <Text style={styles.text}>Bem vindo ao Ecomm</Text>
    </View>
  );
};

export default HomeText;

const styles = StyleSheet.create({
  text:{
    color: '#5956E9',  
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    
  },
});
