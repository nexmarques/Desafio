import React, { createContext, useState } from "react";

export const CartContext = createContext({})

export default function CartProvider({children}){

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0.0)

  function handleAdd(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if (indexItem !== -1){      
      cart[indexItem].amount = cart[indexItem].amount + 1
      cart[indexItem].total = cart[indexItem].amount * cart[indexItem].price
      setCart(cart)
      totalResult(cart)
      return;
    }
    let data = {
      ...newItem,
      amount: 1, 
      total: newItem.price,
    }
    setCart( (products) => [...products, data]) 
    totalResult([...cart,data])   
  }
  

  function handleRemove(product){    
    const indexItem = cart.findIndex(item => item.id === product.id)
    if(cart[indexItem]?.amount > 1){
      cart[indexItem].amount = cart[indexItem].amount - 1
      cart[indexItem].total = cart[indexItem].total - cart[indexItem].price      
      setTotal(cart)
      totalResult(cart)
      return; 
    }
    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem)
    totalResult(removeItem)
  }

  function totalResult(items){
    let minhaList = items
    let result = minhaList.reduce((acc, obj) => {
      return acc + obj.total
    },0)    
    setTotal(result.toFixed(2))
  }

  return(
    <CartContext.Provider value={{cart, handleAdd, handleRemove, total}}>
      {children}
    </CartContext.Provider>
  )
}