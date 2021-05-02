import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';

import {RoundedButton} from '../../core/components';

import {ModelDetailsStyles as styles} from './styles';

const ModelDetailsScreen = ({navigation, route}) => {
  const {id, title, description, fileName, tag} = route.params;
  console.log(title, 'title');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View>
          <Text>Model Details</Text>
          <Text>id: {id}</Text>
          <Text>title: {title}</Text>
          <Text>description: {description}</Text>
          <Text>tag: {tag}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <RoundedButton
            text={'Go to model'}
            onPress={() =>
              navigation.navigate('GestureControl', {
                modelURI: fileName,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default ModelDetailsScreen;
