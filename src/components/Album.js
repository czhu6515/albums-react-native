import React from 'react'
import { Image, Text, View } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'


const Album = (props) => {

  const {textContainer, imageContainer} = styles
  return(
    <Card>
      <CardSection>
        <View>
          <Image
            style={imageContainer} 
            source={{uri: props.album.image}}
          />
        </View>
        <View style={textContainer}>
          <Text >{props.album.title}</Text>
          <Text >{props.album.artist}</Text>
        </View> 
      </CardSection>

      <CardSection>
        <Text >{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text >{props.album.title}</Text>
      </CardSection>
    </Card>
  )

}

const styles={
  textContainer: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageContainer: {
    height: 50,
    width: 50
  }
}

export default Album
