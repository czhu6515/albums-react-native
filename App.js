import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'


export default class App extends React.Component {
  state = {
    headerText: 'Albums'
  }
  
  render() {
    return (
      <Header headerText={this.state.headerText}/>
    )     
  }
}
