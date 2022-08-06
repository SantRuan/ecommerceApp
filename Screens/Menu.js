/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View, Button } from "react-native";

const MenuScreen = ({navigation})=> {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>New Menu Screen</Text>
      <Button 
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}/>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}/>
      <Button 
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}/>
    </View>
  );
}

export default MenuScreen;