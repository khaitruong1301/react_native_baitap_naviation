import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { danhSachSanPham } from '../../assets/data/data'
import Product from '../../components/Product'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    headerTitle: {
        marginTop: '15%',
        marginLeft: '5%',
        fontSize: 35
    }
})

const Store = ({ navigation, route }) => {

    let viewDetail = (item) => {
        console.log('navigation',navigation)
        navigation.navigate('productDetail',{item})
    }
    let columns = 2;
    return (

        <View style={[styles.container]}>

            <Text style={[styles.headerTitle]}>Shoes</Text>
            <FlatList
                style={{maginTop:'15%',backgroundColor:'#f5f5f5'}}
                data={danhSachSanPham}
                renderItem={({ item }) => {
                    return <TouchableOpacity key={item.id}  onPress={()=>{viewDetail(item)}}>
                        <Product columns={columns} item={item} />
                    </TouchableOpacity>
                }}
                numColumns={columns}
                horizontal={false}
                keyExtractor={(item, index) => index }
                columnWrapperStyle={{flex:1,justifyContent:'center'}}

            > 

            </FlatList>
        </View>
    )
}

export default Store
