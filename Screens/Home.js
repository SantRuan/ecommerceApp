/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput} from 'react-native';
import {windowHeight, windowWidth} from '../Constants/Dimensions';
import SearchComponent from '../Components/SearchComponent';
import MenuIcon from '../Components/MenuIcon';
import HomeText from '../Components/HomeText';
import Carousel from '../Components/Carousel';
const heightWindow = Dimensions.get('window').height;
const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const data = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#00B3E6',
    '#99FF99',
    '#B34D4D',
  ];
  return (
    <View style={{display:'flex', flex: 1, alignItems: 'center', backgroundColor: 'yellow'}}>
      <View style={styles.Container}>
        <View style={styles.MenuAndSearchBarContainer}>
          <MenuIcon />
          <SearchComponent 
            onChangeText={setSearch}
            value={search} />
        </View>
        <View
          style={styles.HomeTextContainer}>
          <HomeText />
        </View>
        <View
          style={styles.ProductsContainer}>
            <Carousel data={data}/>
          <Text>Products</Text>
        </View>
        <View
          style={styles.FooterContainer}>
          <Text>Footer</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MenuAndSearchBarContainer: {
    display: 'flex',
    height: windowHeight / 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: windowWidth * 0.9,
    marginTop: 0,
  },
  HomeTextContainer:{
    display:'flex',
    height: windowHeight / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',

  }
,
  Container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'orange',
    width: windowWidth * 0.9,
  },
  ProductsContainer:{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
      height: windowHeight / 2,
      width: '100%'
  },
  FooterContainer:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginBottom: windowHeight * 0.01,
  }
});
