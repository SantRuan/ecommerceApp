import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')

const Carousel = ({data}) =>{

  const renderData = (item) =>{
      return (
        <View style={[styles.cardProduct, {backgroundColor: item}]}>

        </View>
      )
  }

  return (
    <View>
      <FlatList 
      data={data}
      keyExtractor={(item)=> String(item)}
      snapToAlignment={'start'}
      scrollEventThrottle={16}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => renderData(item) }
      pagingEnabled
      />
    </View>
  )
}




export default Carousel




const styles = StyleSheet.create({
  cardProduct: {
    display: 'flex',
    height: height /2.8,
    width: width /1.5,
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

  }
})