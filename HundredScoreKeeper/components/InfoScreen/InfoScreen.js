import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class InfoScreen extends Component {
  render() {
      return(
        <View style={styles.container}>
            <Text>Score Now: </Text>
            <Text>5</Text>
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

export default InfoScreen;