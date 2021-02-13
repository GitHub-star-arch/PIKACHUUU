import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Welcome from './screens/Welcome';
import Places from './screens/PlacesThatNeedHelp'
import DonorList from './screens/DonorList';
import Funds from './screens/Funds';
import AboutUs from './screens/AboutUs'
import Payment from './screens/Payment';
export default class App extends React.Component {

  render() {
    return (
      <NoContainer/>
    )
  }

}

const NintendoSwitch = createSwitchNavigator({
  Welcome: Welcome,
  PlacesThatNeedHelp: Places,
  DonorList: DonorList,
  Funds: Funds,
  AboutUs: AboutUs,
  Payment: Payment,
})

const NoContainer = createAppContainer(NintendoSwitch);