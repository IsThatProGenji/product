import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    Image,
    Dimensions,
    FlatList,
    ImageBackground,
    View
} from 'react-native'
import axios from 'axios'


export default class products extends React.Component {


    state = {
        productsImages: []
    }

    componentDidMount() {
        axios.get('https://hplussport.com/api/products.php')
            .then(res => {
                const productsImages = res.data
                console.log(productsImages)
                this.setState({ productsImages })
            })
    }

    render() {
        return (
            <ScrollView style={{ marginTop: 20, flex: 1 }}>
                {this.state.productsImages.map(products => <View style={{ flex: 1 }}>
                    <Text style={{ marginLeft: 200, marginTop: 20, position: 'absolute' }} >{products.name}</Text>
                    < Image source={{ uri: products.image }} style={{ height: 150, width: 150 }} />
                </View>)}
            </ScrollView >
        )
    }
}
const styles = StyleSheet.create({
    pic: {
        flex: 1,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

})