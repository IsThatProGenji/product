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

export default class products extends React.Component {
    pressHandler() {
        this.props.navigation.navigate('details')
    }
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
                    <Button
                        title="Press me"
                        color="#f194ff"
                        onPress={() => this.props.navigation.navigate('details', products)}
                    />

                </View>)}
            </ScrollView >
        )
    }
}


