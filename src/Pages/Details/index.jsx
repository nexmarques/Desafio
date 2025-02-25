import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { FlatList } from "react-native-gesture-handler";
import CardItem from "../../Components/CardItem";


export default function Details(){  

  const { cart, handleAdd, handleRemove, total} = useContext(CartContext);

  return (
    <View style={styles.container} >     

      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<Text> Nenhum item no carrinho </Text>}
        renderItem={ 
          ({item}) => <CardItem
           data={item} 
           addAmount={ () => handleAdd(item)} 
           removeAmount={ () => handleRemove(item)} 
           />  
        }
        ListFooterComponent={
          () => <Text style={styles.total} >Total: R$ {total} </Text>
        }
      />

      

     
    </View>
  );   
}

const styles = StyleSheet.create({
  container:{
    flex: 1,     
    backgroundColor: '#F8F8F8',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,    
  },  
  total:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  }
})