/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../Constants/Dimensions';
const heightWindow = Dimensions.get('window').height;
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'yellow'}}>
      <View style={styles.Container}>
        <View style={styles.SearchBarContainer}>
          <TextInput
            style={styles.SearchBar}
            onChangeText={setSearch}
            value={search}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}>
          <Text>Home Text</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}>
          <Text>Products</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'gray',
            marginBottom: windowHeight * 0.01,
          }}>
          <Text>Footer</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SearchBarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: windowWidth * 0.8,
    marginTop: heightWindow * 0.01,
    marginBottom: heightWindow * 0.1,
  },
  Container: {
    display: 'flex',
    flex: 1,
    width: windowWidth * 0.9,
    height: windowHeight,
  },
  SearchBar: {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: 'auto',
    borderRadius: 15,
  },
});
