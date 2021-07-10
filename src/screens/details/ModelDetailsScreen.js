import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, TouchableOpacity, Text} from 'react-native';
import {roots} from '../../navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ModelDetailsStyles as styles} from './styles';
import {deleteModel} from '../../api/api';

const ModelDetailsScreen = ({route}) => {
  const {title, description, fileName, id, refresh} = route.params;
  console.log(id, 'id');
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteModel(id);
            navigation.navigate(roots.menuScreen, {refresh: !refresh});
          }}>
          <MaterialCommunityIcons name="delete" size={40} color={'red'} />
        </TouchableOpacity>
      </View>
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
