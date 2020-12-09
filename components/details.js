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
    View,
    Button
} from 'react-native'
import axios from 'axios'

export default class details extends React.Component {
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
            <View style={{ flex: 1 }}>

                <Text>{this.props.navigation.getParam('description')} </Text>
            </View>)
    }


}

