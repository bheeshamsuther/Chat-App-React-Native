import React from 'react';
import {Container, StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {SwitchNav} from './src/Config/navigation'
import { Provider } from 'react-redux'
import store from './src/Config/store'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
  return (
    <View style={{flex:1}}>
      <Provider store = {store}>
  <SwitchNav />
  </Provider>

  {/* < DrawerRight /> */}
  </View>
  );
}
}


