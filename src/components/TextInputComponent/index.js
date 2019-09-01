import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

class TextInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  updateText = text => {
    this.setState({ value: text }) // input: abc
  }
  updateTextOnKeyPress = event => {
    if (event.nativeEvent.key === 'Backspace') {
      console.log(this.state.value) // expected: abc displayed:ab
      // Our Business Logic
    }
  }
  render() {
    return (
      <View>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black' }}
          onChangeText={this.updateText}
          onKeyPress={this.updateTextOnKeyPress}
        />
      </View>
    )
  }
}

export default TextInputComponent
