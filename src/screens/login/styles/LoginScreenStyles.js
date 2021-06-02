import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: 'black',
  },
  titleContainer: {
    flex: metrics.size1,
  },
  titleText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: metrics.size30,
    marginTop: metrics.size100,
    letterSpacing: metrics.size5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: metrics.size1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
