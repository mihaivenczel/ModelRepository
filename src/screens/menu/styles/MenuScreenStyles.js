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

  imageGridView: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  imageListView: {
    width: 100,
    height: 100,
  },
  menuOptionList: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
  },
  menuOptionGrid: {
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
    borderWidth: 1,
  },
  menu: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
  },
  backButton: {
    color: 'white',
    fontSize: 18,
    width: 30,
  },
  headerTitle: {
    flex: 1,
    color: 'white',
    fontSize: 20,

    textAlign: 'center',
  },
  button: {
    color: '#333',
    fontSize: 20,
    marginBottom: 24,
  },
}));
