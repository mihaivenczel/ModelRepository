import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {RoundedButtonStyles} from './styles';

const RoundedButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={RoundedButtonStyles.container}>
      <Text style={RoundedButtonStyles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
