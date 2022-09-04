import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenList } from '@/Routes/public';

const Stack = createStackNavigator();

const screens = screenList.map((item: any, index) => (
  <Stack.Screen
    key={index}
    name={item.name}
    component={item.component}
    options={{ headerShown: false }}
  />
));

export const Public = () => {
  return <Stack.Navigator>{screens}</Stack.Navigator>;
};
