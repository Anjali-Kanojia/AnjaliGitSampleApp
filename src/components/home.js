import React from 'react'
import {View,Text, Button} from 'react-native'

function Home() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Hello Git</Text>
        <Button title="Click for Goodbye"/>
    </View>
  )
}

export default Home