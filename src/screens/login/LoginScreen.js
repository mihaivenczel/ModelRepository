import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {RoundedButton} from '../../core/components';
import {strings} from '../../core/constants';
import {colors} from '../../core/themes';
import {LoginScreenStyles as styles} from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Model Repository</Text>
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text={'Go to Menu'}
          onPress={() => {
            navigation.navigate('MenuScreenFunctional');
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
