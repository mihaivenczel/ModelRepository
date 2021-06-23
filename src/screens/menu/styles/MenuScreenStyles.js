import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 150,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
  },

  body: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  categoryContainer: {
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'column',
  },
  searchText: {
    paddingTop: 20,
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
    marginBottom: 10,
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
    flex: 1,
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
  categoryObject: {
    padding: 10,
    flexDirection: 'column',
  },
  categoryText: {},
  headerTitle: {
    flex: 1,
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
    marginBottom: 30,
    right: 20,
  },
  gridIcon: {
    alignSelf: 'center',
    // justifyContent: 'center',
    top: 8,
  },
  menuOptionListLeft: {
    padding: 20,
  },
});
