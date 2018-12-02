import React, {Component} from 'react';
import {Text, View, ScrollView } from 'react-native';
import Album from './Album'


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

  renderAlbums() {
    return this.state.albums.map(album => 
      <Album key={album.title} album={album} />
    )
  }

  render(){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )

  }
}
