import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default class Funds extends React.Component {

  constructor(){
    super();
    this.state={
      Name: '',
      Amount: '',
      Contact: '',
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <TextInput placeholder="Last, First Name" onChangeText={(text)=>{this.setState({Name: text})}}/>
          <TextInput placeholder="Amount" onChangeText={(text)=>{this.setState({Amount: text})}}/>
          <TextInput placeholder="Contact" onChangeText={(text)=>{this.setState({Contact: text})}}/>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Payment')}>
            <Text>
              Proceed To Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4dffa6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderColor: '008040',
    borderWidth: 5,
    height: 50,
    width: 100,
  },
});
