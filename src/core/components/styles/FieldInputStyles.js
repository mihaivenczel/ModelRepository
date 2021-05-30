import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes/';

export default StyleSheet.create({
  container: {
    height: metrics.size40,
    width: '80%',
    borderBottomWidth: metrics.size1,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: metrics.size20,
  },
  textStyle: {
    padding: metrics.size0,
    flex: metrics.size1,
    color: colors.white,
    fontSize: metrics.size14,
  },
  iconStyle: {
    marginRight: metrics.size15,
  },
});
