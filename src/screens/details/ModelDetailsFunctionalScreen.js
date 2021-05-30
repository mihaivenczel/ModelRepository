import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {getModel} from '../../api/api';

import {ModelDetailsStyles as styles} from './styles';

const ModelDetailsScreen = ({route}) => {
  const {id, title, description, fileName, tag} = route.params;
  const navigation = useNavigation();

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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RuntimeAssetsScreen', {
                fileName: fileName,
              })
            }>
            <Text>Go to model</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModelDetailsScreen;
