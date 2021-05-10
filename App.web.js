import React from 'react'
import { View, Text } from 'react-native'

//import { FontAwesome } from 'react-native-vector-icons'
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
//import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

function App() {
  return (
    <View>
      <Text>Hello world from react native!</Text>
        <FontAwesome name="plus" />
    </View>
  )
}

export default App
