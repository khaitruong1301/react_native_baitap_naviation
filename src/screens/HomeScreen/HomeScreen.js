import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './Favorites';
import Store from './Store';
import Profile from './Profile';
import ProductList from './ProductList';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'


const { activeIcon, inactiveIcon } = StyleSheet.create({
    activeIcon: {
        color: 'orange',
        fontWeight: "bold",
        fontSize: 10
    },
    inactiveIcon: {
        fontSize: 10
    }
})


const Tab = createBottomTabNavigator();

/*Tại màn hình homescreen khai báo 1 tab navigation chứa 4 màn hình con trong đó có 
    + store chứa danh sách sản phẩm
    + 
*/
export default class HomeScreen extends Component {
    render() {
        return (
            
            <Tab.Navigator>
                <Tab.Screen name="store"  component={Store} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: 'orange' }} size={size} name='store' /> : <IconF size={size} name='store' />,             
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Store</Text> : <Text style={[inactiveIcon]}>Store</Text>
                }}></Tab.Screen>
                <Tab.Screen name="favorites" component={Favorites} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: 'orange' }} size={size} name='heart' /> : <IconF size={size} name='heart' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Favorites</Text> : <Text style={[inactiveIcon]}>Favorites</Text>
                }}></Tab.Screen>

                <Tab.Screen name="ProductList" component={ProductList} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconM style={{ color: 'orange' }} size={size} name='shoe-formal' /> : <IconM size={size} name='shoe-formal' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>Shoes</Text> : <Text style={[inactiveIcon]}>Shoes</Text>
                }}></Tab.Screen>

                <Tab.Screen name="You" component={Profile} options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: 'orange' }} size={size} name='history' /> : <IconF size={size} name='history' />,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[activeIcon]}>History</Text> : <Text style={[inactiveIcon]}>History</Text>
                }}></Tab.Screen>

            </Tab.Navigator>
        )
    }
}
