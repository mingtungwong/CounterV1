/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Prompt from 'react-native-prompt';

export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numCounters: 0,
      startingPoints: null,
      countersPromptVisible: true,
      startingPointsPromptVisible: false,
    };
  }

  render() {
    return (
      <View>
        {
          this.state.numCounters === 0 || this.state.startingPoints === null
          ?
            <View>
              <Prompt 
                title="Players"
                placeholder="Players"
                defaultValue=""
                visible={this.state.countersPromptVisible}
                onCancel = { () => {this.setState({countersPromptVisible: false})}} 
                onSubmit = { (value) => {
                  this.setState({
                    numCounters: +value,
                    countersPromptVisible: false,
                    startingPointsPromptVisible: true}) }
                  } />
              <Prompt
                title = "Starting Points"
                placeholder = "Points"
                defaultValue = ""
                visible = {this.state.startingPointsPromptVisible}
                onCancel = { () => {this.setState( {startingPointsPromptVisible: false} )} }
                onSubmit = { (value) => this.setState( {startingPoints: +value, startingPointsPromptVisible: false}) } />
              </View>
          :<Text>{`${this.state.numCounters}, ${this.state.startingPoints}`}</Text>
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('Counter', () => Counter);
