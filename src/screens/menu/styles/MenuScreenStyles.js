import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
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
  searchContainer: {
    marginVertical: 30,
    alignSelf: 'center',
  },
  imageGridView: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  imageListView: {
    width: 100,
    height: 100,
  },
  menuOptionList: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
  },

  listObjectContainer: {
    paddingHorizontal: 10,
    alignContent: 'center',
  },
  listObject: {
    marginHorizontal: 2,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  modalContainer: {
    backgroundColor: 'transparent',
  },
  menu: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 30,
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
  text: {
    color: '#333',
    fontSize: 20,
    marginBottom: 24,
  },
  gridButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    backgroundColor: '#346ff7',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#346ff7',
    bottom: 1,
    alignSelf: 'flex-end',
    marginBottom:30,
    right:20,
  },
  gridIcon: {
    alignSelf: 'center',
    // justifyContent: 'center',
    top: 8,
  },
});
