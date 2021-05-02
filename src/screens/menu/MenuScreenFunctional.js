import React, {Component, useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import GestureControl from './demo/GestureControl';
import {MenuScreenStyles as styles} from './styles';
import {images} from '../../core/images';

const examples = [
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Sofa 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'sofa1.obj',
    tag: 'sofa',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
  {
    title: 'Chair 1',
    description: 'Lorem ipsum sit amet',
    fileName: 'chair2.obj',
    tag: 'scaun',
  },
];

const MenuScreenFunctional = ({navigation}) => {
  const [itemViewList, setItemViewList] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ModelRepository</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              setItemViewList(prevstate => !prevstate);
            }}>
            <Text>Grid/List</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.menu}>
        {itemViewList === true ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 5,
            }}>
            {examples.map((item, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('GestureControl', {
                      modelURI: item.fileName,
                    })
                  }
                  key={item.title}>
                  <Image
                    style={styles.imageGridView}
                    source={images.OldChair}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View>
            {examples.map(item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('GestureControl', {
                      modelURI: item.fileName,
                    })
                  }
                  key={item.title}>
                  <View style={styles.menuOptionList}>
                    <Text style={styles.button}>{item.title}</Text>
                    <Image
                      style={styles.imageListView}
                      source={images.OldChair}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MenuScreenFunctional;
