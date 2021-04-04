import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import GestureControl from './demo/GestureControl';
import Multiple from './demo/Multiple';
import {MenuScreenStyles as styles} from './styles';

export default class example extends Component {
  state = {
    example: undefined,
  };

  select(example) {
    this.setState({example});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.state.example && (
            <TouchableOpacity
              onPress={() => this.select()}
              hitSlop={{top: 9, left: 9, bottom: 9, right: 9}}>
              <Text style={styles.backButton}>&lt;</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headerTitle}>GLModelView Examples</Text>
        </View>

        <View style={styles.body}>{this.renderContent()}</View>
      </View>
    );
  }

  renderContent() {
    if (this.state.example) {
      const Example = this.state.example;
      return <Example />;
    }

    const examples = [
      {component: GestureControl, info: 'Rotation via Gesture Responder'},
      {component: Multiple, info: 'Multiple renders'},
    ];

    return (
      <ScrollView style={styles.menu}>
        {examples.map((example, i) => {
          const title = i + 1 + '. ' + example.info;
          return (
            <TouchableOpacity
              onPress={this.select.bind(this, example.component)}
              key={example.info}>
              <Text style={styles.button}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
