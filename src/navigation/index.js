import React from 'react';

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
          headerTitle: 'Feed The Cat',
          headerTitleStyle: { color: colors.white },
          headerStyle: { backgroundColor: colors.main },
        }}
        component={screens.Main}
      />
      <Drawer.Screen
        name="About"
        options={{
          headerTitle: 'About',
          headerTitleStyle: { color: colors.white },
          headerStyle: { backgroundColor: colors.main },
        }}
        component={screens.About}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          headerTitle: 'Settings',
          headerTitleStyle: { color: colors.white },
          headerStyle: { backgroundColor: colors.main },
        }}
        component={screens.Settings}
      />
    </Drawer.Navigator>
  );
};

// ================================================================================ //

const RootStackNav = createStackNavigator();
const RootStack = () => {
  return (
    <RootStackNav.Navigator initialRouteName="Splash">
      <RootStackNav.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={screens.Splash}
      />
      <RootStackNav.Screen
        name="Auth"
        options={{
          headerShown: false,
        }}
        component={screens.Authorization}
      />
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
