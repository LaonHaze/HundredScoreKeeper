import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import ScoreScreen from './ScoreScreen/ScoreScreen';
import InfoScreen from './InfoScreen/InfoScreen';

export default class Main extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const AppNavigator = createStackNavigator({
    ScoreScreen: {
        screen: ScoreScreen,
        navigationOptions: {
            title: 'ScoreScreen',
            headerShown: false
        }
    },
    InfoScreen: {
        screen: InfoScreen
    }
});

const AppContainer = createAppContainer(AppNavigator);