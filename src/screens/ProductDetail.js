import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import { danhSachSanPham } from '../assets/data/data'
import Product from '../components/Product';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class ProductDetail extends Component {

    state = {
        productDetail: { mangPhimLQ: [] }
    }

    componentDidMount = () => {
        let { item } = this.props.route.params;
        console.log('param', this.props.route.params);
        this.setState({ productDetail: item })
    }
    viewDetail = (item) => {
        this.setState({ productDetail: item })
    }

    renderRelatedProduct = (mangSPLQ = []) => {
        let mangPhimLQ = danhSachSanPham.filter((item, index) => {
            let i = mangSPLQ.findIndex(maSP => maSP == item.maSP);
            if (i != -1) {
                return item;
            }
        });
        console.log(mangPhimLQ)
        return mangPhimLQ.map((item, index) => {
            return <TouchableOpacity onPress={() => { this.viewDetail(item) }} key={index} >
                  <Row style={{ justifyContent: 'flex-start', marginTop: 5 }} >
                    <Col style={{ width: 'auto' }}>
                        <Image source={{ uri: item.hinhAnh }} resizeMode='contain' style={{ width: 100, height: 100 }} />
                    </Col>
                    <Col>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.tenSP}</Text>
                        </View>
                        <View style={{justifyContent:'flex-end',alignItems:'flex-start'}}>
                            <Text style={{ fontSize: 17,color:'red',fontWeight:'bold',marginLeft:10 }}>{item.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")} VNĐ</Text>

                        </View>

                    </Col>
                </Row>
            </TouchableOpacity>

        })
    }



    render() {
        let { productDetail } = this.state;
        console.log(productDetail)
        return (
            <Grid>
                <Row style={{ flexWrap: 'wrap', maxHeight: Dimensions.get('window').height / 5 }}>
                    <Image source={{ uri: productDetail.hinhAnh }} resizeMode='contain' style={{ width: '100%', height: '100%', transform: [{ rotate: '-25deg' }] }} />

                </Row>
                <View style={{ padding: 5 }}>
                    <Text style={{ fontSize: 20, color: 'orange', fontWeight: 'bold' }}>{productDetail.tenSP}</Text>
                    <Text style={{ fontSize: 15, color: '#000' }}>{productDetail.moTa}</Text>
                    <Text style={{ fontSize: 20, color: 'red', fontWeight: '300' }}>{productDetail.gia ? productDetail.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''} VNĐ</Text>
                    <ScrollView horizontal={true}>
                        {
                            productDetail.size?.map((size, index) => {
                                return <TouchableOpacity>
                                    <View>
                                        <View style={{ backgroundColor: '#DDDDDD', marginRight: 5, padding: 10, borderRadius: 5 }}>
                                            <Text style={{ fontSize: 10, color: '#000', width: 'auto' }}>{size}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            })
                        }
                    </ScrollView>
                    <TouchableOpacity>
                        <View style={{ marginBottom: 5, marginTop: 5, alignItems: 'flex-end' }}>
                            <View style={{ borderRadius: 5, backgroundColor: 'orange' }}>
                                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', padding: 10, paddingTop: 5, width: 'auto' }}> Đặt mua <Icon name='cart-arrow-down' size={20} style={{ color: '#fff' }} /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <Row>
                    <Col>
                        <Text style={{ fontSize: 15, fontWeight: '300', padding: 5, backgroundColor: 'rgba(0,0,0,.1)', color: '#000', }}>SẢN PHẨM LIÊN QUAN</Text>
                        <ScrollView>
                            {this.renderRelatedProduct(productDetail.dsSanPhamLienQuan)}
                        </ScrollView>
                    </Col>
                </Row>


            </Grid>
        )
    }
}
