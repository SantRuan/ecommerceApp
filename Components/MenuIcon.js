import React from 'react'
import {View, StyleSheet} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const MenuIcon = () =>{


  return (
    <View styles={styles.menuIcon}>
       <FontAwesomeIcon icon={faBars} size={25} />
    </View>
 
  )
}



export default MenuIcon


const styles = StyleSheet.create({
  menuIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  },
})