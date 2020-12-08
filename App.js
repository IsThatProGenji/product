import React, { Component } from 'react'
import {
  AppRegistry,
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
import Navigator from './components/homeStack'

export default function App() {
  return (
    <Navigator />
  )
}
