import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProductList extends Component {
    render() {
        console.log(this.props.navigation.navigate);
        return (
            <View>
                <Text> ProductList </Text>
            </View>
        )
    }
}
