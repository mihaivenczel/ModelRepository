import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default (styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,

    marginHorizontal: 20,
    marginTop: 40,
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginBottom: 20,
    alignItems: 'center',
  },
}));
