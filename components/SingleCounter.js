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
            <View style={styles.counterContainer}>
                <Button style={styles.button} title="-" onPress={this.decrease} />
                <Text style={styles.counterNumber}>{this.state.points}</Text>
                <Button style={styles.button} title="+" onPress={this.increase}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    counterNumber: {
        fontWeight: 'bold',
        fontSize: 50,
    },
    button: {
        width: 50
    },
    counterContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('SingleCounter', () => SingleCounter);