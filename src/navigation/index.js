import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import screens from '../screens';

// ================================================================================ //

const RootStackNav = createStackNavigator();

const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Main">
      <RootStackNav.Screen
        name="Main"
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'black',
          },
        }}
        component={screens.Main}
      />
    </RootStackNav.Navigator>
  );
};

export default RootStack;

// ================================================================================ //
