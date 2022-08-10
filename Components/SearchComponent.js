import React from 'react'
import {TextInput, StyleSheet} from 'react-native'


const SearchComponent = ({search, setSearch}) =>{


  return (
    <TextInput
            style={styles.SearchBar}
            onChangeText={setSearch}
            value={search}
          />
 
  )
}



export default SearchComponent

const styles = StyleSheet.create({
  SearchBar: {
    backgroundColor: 'white',
    width: '80%',
    height: 45,
    marginLeft: 'auto',
    borderRadius: 15,
  },
})