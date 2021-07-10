import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../core/themes/';

export default styles = StyleSheet.create({
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
  goBackButton: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 50,
    width: '20%',
    marginTop: 10,
    marginLeft: 10,
  },
  goBackText: {
    fontSize: 15,
    padding: 10,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goNextButton: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 50,
    // width: '20%',
    marginTop: 10,
    marginLeft: 10,
  },
  gridIcon: {
    alignSelf: 'center',
    // justifyContent: 'center',
    top: 8,
  },
  textTitle: {
    fontSize: 25,
    padding: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
  },
});
