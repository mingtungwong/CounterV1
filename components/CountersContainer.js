import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

import SingleCounter from './SingleCounter';

export default class CountersContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 0,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                { (new Array(this.props.numCounters)).fill(0).map((val, idx) => <SingleCounter key={idx} points={this.props.startingPoints} />) }
            </View>
        )
    }
}

AppRegistry.registerComponent('CountersContainer', () => CountersContainer);