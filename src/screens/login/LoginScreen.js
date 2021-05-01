import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {LOGIN_SAGA} from './redux';
import {RoundedButton, FieldInput} from '../../core/components';
import {strings} from '../../core/constants';
import {colors} from '../../core/themes';
import {LoginScreenStyles} from './styles';
import {getModelObjFile} from '../../core/api/model';

const LoginScreen = ({login, message, isFetchingToken, navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.marginTop} />
      <FieldInput
        placeholder={strings.EmailPlaceholder}
        leftIconName={strings.envelopeIcon}
        value={email}
        onChangeValue={setEmail}
        autoCapitalize={strings.none}
        autoCompleteType={strings.email}
        autoCorrect={false}
      />
      <FieldInput
        placeholder={strings.PasswordPlaceholder}
        leftIconName={strings.lockIcon}
        value={password}
        onChangeValue={setPassword}
        secureTextEntry={hidePassword}
        autoCapitalize={strings.none}
        rightIconName={hidePassword ? strings.eyeIcon : strings.eyeSlashIcon}
        onPressRightIcon={() => setHidePassword(!hidePassword)}
      />
      <View style={LoginScreenStyles.marginTop} />
      {isFetchingToken ? (
        <ActivityIndicator
          size="large"
          color={colors.white}
          style={LoginScreenStyles.activityIndicator}
        />
      ) : (
        <RoundedButton text={strings.LOGIN} onPress={login} />
      )}
      <RoundedButton
        text={strings.skip}
        onPress={() => {
          navigation.navigate('MenuScreenFunctional');
        }}
      />
      <RoundedButton
        text="api call test"
        onPress={() => {
          getModelObjFile();
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const {message, isFetchingToken} = state.login.loginReducer;
  return {message, isFetchingToken};
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({type: LOGIN_SAGA}),
});

export default connect(
  null,
  null,
)(LoginScreen);
