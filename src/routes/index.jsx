import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Pages/Home';
import Details from '../Pages/Details';

export default function Routes() {
  const Stack = createStackNavigator();
  return (         
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerTitle: 'Meu carrinho',
            }}
          />
        </Stack.Navigator>         
  );
}
