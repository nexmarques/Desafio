import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {FlatList} from 'react-native';
import ProductList from '../../Components/ProductList';
import Icon from '@react-native-vector-icons/feather';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../contexts/CartContext';

export default function Home() {
  const {cart, handleAdd} = useContext(CartContext);

  const [products, setProducts] = useState([
    {id: '1', name: 'Coca Cola', price: 19.9},
    {
      id: '2',
      name: 'Chocolate',
      price: 6.5,
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15,
    },
    {
      id: '4',
      name: 'Batata Frita',
      price: 23.9,
    },
    {
      id: '5',
      name: 'Guarana lata',
      price: 6.0,
    },
  ]);

  const navigation = useNavigation();

  function handleAddCart(item){
    handleAdd(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Lista de produtos </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}>
          {cart.length > 0 && (
            <View style={styles.dot}>
              <Text style={styles.dotText}> {cart?.length} </Text>
            </View>
          )}
          <Icon name="shopping-cart" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ProductList data={item} addToCart={() => handleAddCart(item)} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 12,
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 2,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
