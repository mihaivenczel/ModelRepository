import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes/';

export default StyleSheet.create({
  container: {
    height: metrics.size50,
    backgroundColor: colors.shuttleGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.size25,
    borderWidth: metrics.size1,
    width: '50%',
  },
  textStyle: {
    color: colors.white,
    fontSize: metrics.size14,
    fontWeight: 'bold',
  },
});
