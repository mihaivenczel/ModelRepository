import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: metrics.size100,
    width: metrics.size140,
  },
  marginTop: {
    marginTop: metrics.size20,
  },
  activityIndicator: {
    height: metrics.size50,
  },
});
