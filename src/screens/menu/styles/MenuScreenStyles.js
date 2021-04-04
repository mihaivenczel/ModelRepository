import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  header: {
    height: 75,
    paddingTop: 22,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#5894f3',
    alignItems: 'center',
    zIndex: 100,
  },
  body: {
    flex: 1,
    zIndex: 1,
  },
  menu: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 40,
    backgroundColor: '#fff',
  },
  backButton: {
    color: 'white',
    fontSize: 18,
    width: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  button: {
    color: '#333',
    fontSize: 20,
    marginBottom: 24,
  },
}));
