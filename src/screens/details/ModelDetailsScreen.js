import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, TouchableOpacity, Text} from 'react-native';
import {roots} from '../../navigation';

import {ModelDetailsStyles as styles} from './styles';

const ModelDetailsScreen = ({route}) => {
  const {id, title, description, fileName, tag} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
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
              navigation.navigate(roots.modelScreen, {
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
