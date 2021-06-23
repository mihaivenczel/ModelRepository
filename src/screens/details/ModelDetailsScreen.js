import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, TouchableOpacity, Text} from 'react-native';
import {roots} from '../../navigation';

import {ModelDetailsStyles as styles} from './styles';

const ModelDetailsScreen = ({route}) => {
  const {title, description, fileName} = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.textTitle}> {title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
          style={styles.goNextButton}
            onPress={() =>
              navigation.navigate(roots.modelScreen, {
                fileName: fileName,
              })
            }>
            <Text style={styles.goBackText}>Go to model</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModelDetailsScreen;
