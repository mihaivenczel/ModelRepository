import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import GestureControl from './demo/GestureControl';
import Animations from './demo/Animations';
import {MenuScreenStyles as styles} from './styles';
import {images} from '../../core/images';

export default class example extends Component {
  state = {
    example: undefined,
    component: undefined,
    fileName: undefined,
  };

  select({example, component, fileName}) {
    console.log(fileName, 'file');
    this.setState({example, component, fileName});
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
          <View>
            <TouchableOpacity>
              <Text>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>{this.renderContent()}</View>
      </View>
    );
  }

  renderContent() {
    if (this.state.example) {
      const Example = this.state.example;
      return <Example modelURI={fileName} />;
    }

    const examples = [
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
      {
        title: 'Chair 1',
        description: 'Lorem ipsum sit amet',
        fileName: 'chair2.obj',
      },
    ];

    return (
      <ScrollView style={styles.menu}>
        {examples.map((item, i) => {
          {
          }
          return (
            <TouchableOpacity
              onPress={this.select.bind(this, GestureControl, item.fileName)}
              key={item.title}>
              <View style={styles.menuOption}>
                <Text style={styles.button}>{item.title}</Text>
                <Image style={styles.image} source={images.OldChair} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
