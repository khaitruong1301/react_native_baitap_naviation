/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

// const TopTab = createMaterialTopTabNavigator();
// const Tab =  createBottomTabNavigator();
// const Drawer = createDrawerNavigator()

import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProductDetail from './src/screens/ProductDetail';
import Login from './src/screens/Login';







const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const App = () => {


  return (
    <>
      <NavigationContainer>

        <Stack.Navigator>
          {/*Trong app chứa 3 màn hình riêng biệt, Trong đó chỉ có home screen là 1 stack chứa 4 màn hình con */}

          <Stack.Screen name="login" options={{ showLabel: true }} component={Login}></Stack.Screen>

          <Stack.Screen name="home" component={HomeScreen} options={{
            tabBarIcon: (forcus, color, size) => <Icon name='home' size={30}></Icon>,
            headerShown: false
          }}></Stack.Screen>

          <Stack.Screen name="productDetail" options={{ showLabel: true }} initialParams={{ item: {} }} component={ProductDetail}></Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;




{/* <Stack.Navigator>
<Stack.Screen name="Login"   >
  {props => <Login {...props} />}
</Stack.Screen>

<Stack.Screen name="Home" component={Home} initialParams={{ params: { email: '' } }}></Stack.Screen>

<Stack.Screen name="ProductList" component={ProductList} ></Stack.Screen>
</Stack.Navigator> */}