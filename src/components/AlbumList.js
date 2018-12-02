import React, {Component} from 'react';
import {Text, View } from 'react-native';

export default class AlbumList extends Component{
  state = {
    albums: []
  }

  componentWillMount(){
    return fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseJson) => {
      albums = responseJson
      this.setState({ albums })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View>
        {console.log(this.state.albums)}
        <Text>Hello!</Text>
      </View>
    )

  }
}
