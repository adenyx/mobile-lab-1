import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import screens from '../screens';
import { colors } from '../styles';

// ================================================================================ //

const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator
      overlayColor="rgba(0, 0, 0, 0.0)"
      drawerType="slide"
      drawerPosition="left"
      initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        options={{
          //   headerShown: false,
          headerTitle: 'Feed The Cat',
          headerTitleStyle: { color: colors.white },
          headerStyle: { backgroundColor: colors.main },
        }}
        component={screens.Main}
      />
    </Drawer.Navigator>
  );
};

// ================================================================================ //

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Drawer">
      {/* <RootStackNav.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={screens.Main}
      /> */}
      <RootStackNav.Screen
        name="Drawer"
        options={{
          headerShown: false,
        }}
        component={DrawerStack}
      />
    </RootStackNav.Navigator>
  );
};

export default RootStack;

// ================================================================================ //
