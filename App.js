import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


export default class App extends React.Component {
  state = {
    headerText: 'Albums'
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={this.state.headerText}/>
        <AlbumList />
      </View>
    )     
  }
}
