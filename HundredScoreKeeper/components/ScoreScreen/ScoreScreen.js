import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ScoreScreen extends Component {
  render() {
      return(
        <View style={styles.container}>
            <Text>Score Keeper</Text>
            <Button
                title = "Info Screen"
                onPress = {() => this.props.navigation.navigate("InfoScreen")}
            />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
