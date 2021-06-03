import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import HomeScreen from '../screens/home/HomeScreen';
import ModelScreen from '../screens/model/ModelScreen';
import MenuScreen from '../screens/menu/MenuScreen';
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
      initialRouteName={roots.homeScreen}>
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.homeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.menuScreen}
        component={MenuScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.detailsScreen}
        component={ModelDetailsScreen}
      />
      <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.modelScreen}
        component={ModelScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
