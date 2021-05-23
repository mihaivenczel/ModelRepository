import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import LoginScreen from '../screens/login/LoginScreen';
import GestureControl from '../screens/menu/demo/GestureControl';
import MenuScreenFunctional from '../screens/menu/MenuScreenFunctional';
import ModelDetailsScreen from '../screens/details/ModelDetailsScreen';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.loginScreen}>
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.loginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.menuScreenFunctional}
        component={MenuScreenFunctional}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.gestureScreen}
        component={GestureControl}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.detailsScreen}
        component={ModelDetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
