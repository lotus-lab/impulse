import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenList } from '@/Routes/private';

const Stack = createStackNavigator();

const screens = screenList.map((item: any, index) => (
  <Stack.Screen
    key={index}
    name={item.name}
    component={item.component}
    options={{
      headerShown: false,
    }}
  />
));

export const Private = () => {
  return <Stack.Navigator>{screens}</Stack.Navigator>;
};
