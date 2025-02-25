import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import CartProvider from "./src/contexts/CartContext";

export default function App(){
  return (
    <NavigationContainer>
      <CartProvider>
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}