import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductList({data, addToCart}){  
  return (
    <View style={styles.container} >   
      <View>
        <Text style={styles.name} > {data.name} </Text>
        <Text> R$ {data.price} </Text>
      </View>     
      
      
        <TouchableOpacity style={styles.button} onPress={ addToCart }>
          <Text> + </Text>
        </TouchableOpacity>
      
      

    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",        
    alignItems: 'center',      
    borderColor: '#121212',
    borderWidth: 1, 
    borderRadius: 5, 
    margin: 10,
    padding: 10,
    flexDirection: 'row',    
    justifyContent:'space-between',  
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',    
  },    
  button:{
    backgroundColor: '#FF8A65',
    borderRadius: 5,
    padding: 10,   
    justifyContent: 'center',
    alignItems: 'center',    
  }
})