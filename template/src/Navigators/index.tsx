import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Private } from './Private';
import { Public } from './Public';
import { NavigationColors } from '@/Theme/Variables';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationColors,
  },
};
const RootStack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <RootStack.Navigator initialRouteName={false ? 'Auth' : 'NonAuth'}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={Private}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="NonAuth"
          component={Public}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
