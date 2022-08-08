/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../Constants/Dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
const heightWindow = Dimensions.get('window').height;
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'yellow'}}>
      <View style={styles.Container}>
        <View style={styles.MenuAndSearchBarContainer}>
          <View styles={styles.menuIcon}>
            <FontAwesomeIcon icon={faBars} size={30} />
          </View>
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
  MenuAndSearchBarContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: windowWidth * 0.9,
    marginTop: 50,
    marginBottom: 15,
  },
  Container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'orange',
    width: windowWidth * 0.9,
  },
  SearchBar: {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: 'auto',
    borderRadius: 15,
  },
  menuIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
