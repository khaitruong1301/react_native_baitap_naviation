import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, Animated, TouchableOpacity, Alert } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const { textBoxStyle, titleStyle, buttonStyle } = StyleSheet.create({
    textBoxStyle: {
        fontSize: 20,
        width: width * 0.75,
        borderBottomWidth: 3,
        borderColor: '#9999FF',
        height: 50,
        marginTop: '5%'
    },
    titleStyle: {

        fontSize: 50,
        fontWeight: '300',
        marginTop: 25,

    },
    buttonStyle: {
        marginTop: 15,
        backgroundColor: '#9999FF',
        width: width / 2,
        alignContent: 'center',
        padding: '5%',
        alignItems: 'center'
    }
})


export default class Login extends Component {

    state = {
        email: 'Cybersoft@gmail.com',
        password: 'cybersoft@123',
    }
    //Hàm lấy giá trị từ các text input
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        //Đối tượng từ stack để chuyển hướng trang
        let { navigation } = this.props;
        //state chứa giá trị người dùng nhập
        let { email, password } = this.state;
        //Kiểm tra nếu người dùng nhập đúng email và pass => Chuyển qua home screen ngược lại xuất thông báo thất bại
        if (email === 'Cybersoft@gmail.com' && password === 'cybersoft@123') {
            navigation.navigate('home',{params:{email:email}}); //Truyền params qua home
        } else {
            Alert.alert('Notification', 'Login failed !')
        }
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[titleStyle]}>Login</Text>
                {/*Sử dụng sự kiện onChangeText để bắt giá trị khi người dùng nhập vào */}
                <TextInput style={[textBoxStyle]} autoFocus={true} placeholder='Email' onChangeText={this.handleChange.bind(this, "email")} defaultValue={'Cybersoft@gmail.com'} />

                <TextInput style={[textBoxStyle]} secureTextEntry={true} autoFocus={true} placeholder='Password' onChangeText={(value) => { this.handleChange('password', value) }} defaultValue='cybersoft@123' />

                <TouchableOpacity onPress={this.handleSubmit}>
                    <View style={[buttonStyle]}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


