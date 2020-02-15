import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import ScoreScreen from './ScoreScreen/ScoreScreen';

class Main extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden />
                <ScoreScreen />
            </View>
        );
    }
}

export default Main;