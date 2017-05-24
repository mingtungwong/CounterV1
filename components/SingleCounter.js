import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class SingleCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: `Player ${this.props.playerNumber}`,
            defaultPoints: this.props.points,
            points: this.props.points
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.resetPoints = this.resetPoints.bind(this);
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

    resetPoints() {
        this.setState({points: this.state.defaultPoints});
    }


    render() {
        return (
            <View style={styles.counterContainer}>
                <Text style={styles.playerTag}>{this.state.name}</Text>
                <View style={styles.box1}>
                    <Button style={styles.button} title="-" onPress={this.decrease} />
                    <Text style={styles.counterNumber}>{this.state.points}</Text>
                    <Button style={styles.button} title="+" onPress={this.increase}/>
                </View>
                <View>
                    <Button title="Reset" onPress={this.resetPoints} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playerTag: {
        fontWeight: 'bold',
        fontSize: 20
    },
    counterNumber: {
        fontWeight: 'bold',
        fontSize: 50,
    },
    button: {
        width: 50
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('SingleCounter', () => SingleCounter);