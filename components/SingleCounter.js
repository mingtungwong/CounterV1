import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class SingleCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points
        }
    }

    render() {
        return (
            <View><Text>{this.state.points}</Text></View>
        )
    }
}

AppRegistry.registerComponent('SingleCounter', () => SingleCounter);