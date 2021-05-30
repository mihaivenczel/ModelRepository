import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import LoginScreen from '../screens/login/LoginScreen';
import RuntimeAssets from '../screens/menu/demo/RuntimeAssets';
import MenuScreenFunctional from '../screens/menu/MenuScreenFunctional';
import ModelDetailsScreen from '../screens/details/ModelDetailsScreen';
import ModelDetailsFunctionalScreen from '../screens/details/ModelDetailsFunctionalScreen';

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
        name={roots.detailsScreen}
        component={ModelDetailsScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.detailsFunctionalScreen}
        component={ModelDetailsFunctionalScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.runtimeScreen}
        component={RuntimeAssets}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
