import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

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
            <TouchableOpacity onPress={() => this.select()}>
              <Text style={styles.backButton}>&lt;</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headerTitle}>ModelRepository</Text>
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
      {component: GestureControl, info: 'Chair 1'},
      {component: GestureControl, info: 'Chair 2'},
      {component: GestureControl, info: 'Chair 3'},
      {component: GestureControl, info: 'Sofa 1'},
      {component: GestureControl, info: 'Sofa 2'},
      {component: GestureControl, info: 'Sofa 3'},
      {component: GestureControl, info: 'Misc 1'},
      {component: GestureControl, info: 'Misc 2'},
    ];

    return (
      <ScrollView style={styles.menu}>
        {examples.map((example, i) => {
          const title = example.info;
          return (
            <TouchableOpacity
              onPress={this.select.bind(this, example.component)}
              key={example.info}>
              <View style={styles.menuOption}>
                <Text style={styles.button}>{title}</Text>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://www.oakworld.co.uk/wp-content/uploads/2018/09/Alston-Oak-Dining-Chair-64334-64283.jpg',
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
