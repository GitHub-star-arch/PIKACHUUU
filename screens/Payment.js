import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class Payment extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>

                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>

                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/Paypal.png')} style={{width: 150, height: 150, borderWidth: 2}} />
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
