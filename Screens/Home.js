/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green'}}>
          <Text>Menu // Search Bar</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
          <Text>Home Text</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'blue'}}>
          <Text>Products</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Footer</Text>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
