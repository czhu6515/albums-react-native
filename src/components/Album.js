import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const Album = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  const { albumHeaderStyle, 
          albumTitleStyle,
          thumbnailStyle,
          thumbnailContainerStyle, 
          imgStyle,
        } = styles

  return(
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle} 
            source={{uri: thumbnail_image }}
          />
        </View>
        <View style={albumHeaderStyle}>
          <Text style={albumTitleStyle}>{title}</Text>
          <Text >{artist}</Text>
        </View> 
      </CardSection>

      <CardSection>
        <Image
          style={imgStyle} 
          source={{ uri: image }}
        />   
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now from Amazon!
        </Button>
      </CardSection>

    </Card>
  )

}

const styles={
  albumHeaderStyle: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumTitleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imgStyle: {
    height: 300,
    flex: 1,
    width: null
  },
}

export default Album
