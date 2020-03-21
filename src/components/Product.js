import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;


export default class Product extends Component {

    addCart = (item) => {
        
    }
    removeCart = (id) => {

    }

    render() {
        let { columns } = this.props;
        let { item } = this.props;

        const styles = StyleSheet.create({
            item: {
                flexDirection: 'column',
                // backgroundColor: 'red',
                minHeight: 320,
                marginTop: '5%'
            

            },
            nameItem: {
                fontSize: 15,
                fontWeight: 'bold',
                maxWidth: Dimensions.get('window').width / columns,


            },
            priceItem: {
                width: 'auto',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'red',
            },
            info: {
                flex: 1,
                maxWidth:widthDevice/columns,
                paddingLeft: '5%',

                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                // backgroundColor:'blue'
            },
            button: {
                padding: 10,
                paddingLeft:15,
                paddingRight:15,
                marginRight: 5,
                marginTop: 5,
                borderRadius: 5,
                backgroundColor: '#999999'
            }
        })
        // let tenSP = item.tenSP < 20 ? item.tenSP : item.tenSP.substr(0, 20) + '...'
        console.log(item.hinhAnh)
        return (
            <View style={[styles.item]}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Image source={{ uri: item.hinhAnh }} style={{ width: widthDevice / columns, height: 200, resizeMode: 'contain', transform: [{ rotate: '-25deg' }] }} />
                </View>
                <View style={[styles.info]}>
                    <Text style={[styles.nameItem]}>{item.tenSP}</Text>
                    <Text style={[styles.priceItem]}>{item.gia}</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => { this.addCart(item) }}>
                            <View style={[styles.button]}>
                                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{color: '#000',fontWeight:'bold', fontSize: 17, paddingTop:15,paddingLeft:5,paddingRight:10 }}>1</Text>
                        <TouchableOpacity onPress={() => { this.addCart(item) }}>
                            <View style={[styles.button]}>
                                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>-</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }


}
