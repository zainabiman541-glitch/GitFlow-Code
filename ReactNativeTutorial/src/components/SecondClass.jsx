import React, { Component } from 'react'
import { Text, View } from 'react-native'

class SecondClass extends Component {
  render() {
    return (
      <View>
            <Text style={{ fontSize: 30 , fontStyle:'italic'}}> Age: {this.props.Data}</Text>
      </View>
    )
  }
}

export default SecondClass
