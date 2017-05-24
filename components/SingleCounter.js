import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';

export default class SingleCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.changePoints(1);
    }

    decrease() {
        this.changePoints(-1);
    }

    changePoints(amount) {
        this.setState({points: this.state.points + amount});
    }

    render() {
        return (
            <View>
                <Button title="-" onPress={this.decrease} /><Text>{this.state.points}</Text><Button title="+" onPress={this.increase}/>
            </View>
        )
    }
}

AppRegistry.registerComponent('SingleCounter', () => SingleCounter);