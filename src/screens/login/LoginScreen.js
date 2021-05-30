import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {RoundedButton} from '../../core/components';
import {strings} from '../../core/constants';
import {colors} from '../../core/themes';
import {LoginScreenStyles} from './styles';

const LoginScreen = ({navigation}) => {

  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.marginTop} />

      <View style={LoginScreenStyles.marginTop} />

      <RoundedButton
        text={strings.skip}
        onPress={() => {
          navigation.navigate('MenuScreenFunctional');
        }}
      />
      
    </View>
  );
};

export default LoginScreen;
