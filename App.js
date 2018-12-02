import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


export default class App extends React.Component {
  state = {
    headerText: 'Albums'
  }
  
  render() {
    return (
      <View>
        <Header headerText={this.state.headerText}/>
        <AlbumList />
      </View>
    )     
  }
}
