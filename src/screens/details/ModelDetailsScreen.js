import {useNavigation} from '@react-navigation/core';
import React, {Component} from 'react';

// import {ModelDetailsStyles as styles} from './styles';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

import RuntimeAssets from '../menu/demo/RuntimeAssets';

export default class ModelDetailsScreen extends Component {
  state = {
    example: undefined,

    id: undefined,
    title: undefined,
    description: undefined,
    fileName: undefined,
    tag: undefined,
  };

  UNSAFE_componentWillMount() {
    const {route} = this.props;
    console.log(route.params);
    this.state.fileName = route.params?.fileName;
    this.state.title = route.params?.fileName;
  }

  select(example) {
    this.setState({example});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.state.example && (
            <TouchableOpacity
              onPress={() => this.select()}
              hitSlop={{top: 9, left: 9, bottom: 9, right: 9}}>
              <Text style={styles.backButton}>&lt;</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.headerTitle}>eeeeeeeeeee</Text>
        </View>

        <View style={styles.body}>{this.renderContent()}</View>
      </View>
    );
  }

  renderContent() {
    const {navigator}=useNavigation;
    // if (this.state.example) {
    //   const Example = this.state.example;
    //   return <Example />;
    // }
    // const examples = [{component: RuntimeAssets, info: 'RuntimeAssets'}];

    return (
      <View style={styles.menu}>
            <TouchableOpacity
             onPress={()=>navigator.navigate("RuntimeAssetsScreen")}
             >
              <Text style={styles.button}>{title}</Text>
            </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
