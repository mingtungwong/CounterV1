import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
    Button,
    Alert
} from 'react-native';

import Prompt from 'react-native-prompt';

export default class SingleCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: `Player ${this.props.playerNumber}`,
            defaultPoints: this.props.points,
            points: this.props.points,
            editPromptVisible: false
        }

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.resetPoints = this.resetPoints.bind(this);
        this.editName = this.editName.bind(this);
        this.promptReset = this.promptReset.bind(this);
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

    editName () {
        this.setState({editPromptVisible: true});
    }

    promptReset() {
        Alert.alert(
            'Reset',
            'Are you sure you want to reset the points?',
            [
                { text: 'Cancel', onPress: () => {} },
                { text: 'Okay', onPress: this.resetPoints}
            ]
        );
    }

    render() {
        return (
            <View style={styles.counterContainer}>
                <View style={styles.box2}>
                    <Button title='Edit' onPress={this.editName} />
                    <Text style={styles.playerTag}>{this.state.name}</Text>
                </View>
                <View style={styles.box1}>
                    <Button style={styles.button} title="-" onPress={this.decrease} />
                    <Text style={styles.counterNumber}>{this.state.points}</Text>
                    <Button style={styles.button} title="+" onPress={this.increase}/>
                </View>
                <View>
                    <Button title="Reset" onPress={this.promptReset} />
                </View>
                <Prompt
                    title="Player Name"
                    defaultValue=""
                    visible={this.state.editPromptVisible}
                    onCancel= { () => {this.setState({editPromptVisible: false})}}
                    onSubmit = { (value) => {
                        this.setState({
                            name: value,
                            editPromptVisible: false
                        })
                    }
                }/>
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
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('SingleCounter', () => SingleCounter);