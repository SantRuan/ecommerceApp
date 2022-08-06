/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {windowHeight, windowWidth} from '../Constants/Dimensions';
import { useStore } from '../Store/Store';

const LoginScreen = ({navigation}) => {
  const store = useStore()

  useEffect(()=> {
  
  }, [store.emailUser])


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textLogin}>Login </Text>

        <View style={styles.form}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.text}> Email</Text>
            <TextInput
              style={styles.text}
              placeholder="Type your email ..."
              onChangeText={store.setEmailUser}
              value={store.emailUser}
            />
          </View>

          <View  style={styles.loginTextContainer}>
            <Text style={styles.text} >Password</Text>
            <TextInput
              style={styles.text}
              placeholder="Type your Password ..."
              onChangeText={store.setPassword}
              value={store.password}
            />
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={store.showUserStoredInTheStore}>
            <Text style={styles.textLoginButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ {alignItems:'center'}}>
            <Text style={styles.text}>Create Account</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 0.6,
    backgroundColor: '#FFFFFF',
  },
  form: {
    display: 'flex',
    backgroundColor: '#FFFFFF ',
    height: windowHeight / 2,
    width: windowWidth / 1.25,
    marginTop: windowHeight * 0.05,
  },
  loginTextContainer: {
    display: 'flex',
    height: windowHeight * 0.0785,
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 2,
    marginBottom: windowHeight * 0.05,
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 18,
    color: 'black',
    padding: 2
  },
  textLogin:{
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    padding: 2
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginBottom: windowHeight * 0.05,
    marginTop: windowHeight * 0.001,
    borderRadius: 10,
    backgroundColor: '#5956E9',
  },
  buttonContainer:{
    display: 'flex', 
  },
  textLoginButton:{
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: 18,
    padding: 2
  },
  textCreateAccount:{
    color: '#5956E9',
    fontFamily: 'Raleway',
    fontSize: 17,

  }
});
