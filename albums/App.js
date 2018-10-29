import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';// Import destructuring

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
  }
}