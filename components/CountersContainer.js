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
            <ScrollView style={{
                flex: 0,
                flexDirection: 'column'
            }}>
                { (new Array(this.props.numCounters)).fill(0).map((val, idx) => <SingleCounter key={idx} points={this.props.startingPoints} />) }
            </ScrollView>
        )
    }
}

AppRegistry.registerComponent('CountersContainer', () => CountersContainer);