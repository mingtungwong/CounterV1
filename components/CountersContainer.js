import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView
} from 'react-native';

import SingleCounter from './SingleCounter';

export default class CountersContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                { (new Array(this.props.numCounters)).fill(0).map((val, idx) => <SingleCounter key={idx} playerNumber={idx + 1} points={this.props.startingPoints} />) }
            </ScrollView>
        )
    }
}

AppRegistry.registerComponent('CountersContainer', () => CountersContainer);