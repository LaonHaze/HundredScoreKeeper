import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './ScoreScreen.style' ;

export default class ScoreScreen extends Component {
  render() {
      return(
        <View style={styles.container}>
            <Text>Hundred Score Keeper</Text>
            <Button
                title = "Info Screen"
                onPress = {() => this.props.navigation.navigate("InfoScreen")}
            />
            <Text>Yes</Text>
        </View>
      );
  }
}
