import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import GestureControl from './demo/GestureControl';
import {MenuScreenStyles as styles} from './styles';
import {images} from '../../core/images';

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

const MenuScreenFunctional = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ModelRepository</Text>
        <View>
          <TouchableOpacity>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.menu}>
        {examples.map((item, i) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('GestureControl', {modelURI: item.fileName})
              }
              key={item.title}>
              <View style={styles.menuOption}>
                <Text style={styles.button}>{item.title}</Text>
                <Image style={styles.image} source={images.OldChair} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MenuScreenFunctional;
