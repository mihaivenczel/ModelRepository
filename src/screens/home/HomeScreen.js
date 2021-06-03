import React from 'react';
import {View, Text} from 'react-native';
import {RoundedButton} from '../../core/components';
import {roots} from '../../navigation';

import {HomeScreenStyles as styles} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Model Repository</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text={'Go to Menu'}
          onPress={() => {
            navigation.navigate(roots.menuScreen);
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
