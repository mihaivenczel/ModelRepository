import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import ModelView from 'react-native-gl-model-view';
import {Buffer} from 'buffer';
import axios from 'axios';
import {BASE_DEV_URL} from '../../core/constants/url';

// XXX: This is the standard content header returned for a blob.
const octetStreamHeader = 'data:application/octet-stream;base64,';

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class ModelScreen extends React.Component {
  state = {
    model: null,
    texture: null,
    error: null,
    loading: false,

    zoom: -10,
    rotateX: new Animated.Value(-90),
    rotateZ: new Animated.Value(0),
    translateZ: new Animated.Value(-10),
    fromXY: undefined,
    valueXY: undefined,
    valueZ: undefined,

    fileName: undefined,
  };

  UNSAFE_componentWillMount() {
    const {route} = this.props;
    console.log(route.params, 'model');
    this.state.fileName = route.params?.fileName;
    this.fetchRequestedModel();
  }

  getContentFromUrl(url, decode = false) {
    return axios({
      method: 'get',
      url,
      responseType: 'blob',
    }).then(
      res =>
        new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.onloadend = () =>
            resolve(
              decode
                ? new Buffer.from(fileReader.result, 'base64')
                : fileReader.result,
            );
          fileReader.onerror = reject;
          fileReader.readAsDataURL(res.data);
        }),
    );
  }

  // XXX: The underlying application needs to know the file type of the model.
  //      Therefore, we must change the header returned by axios to something
  //      more indicative of the type.
  formatContent(uri, header) {
    return `${header}${uri.substring(octetStreamHeader.length)}`;
  }

  fetchRequestedModel = () => {
    this.setState({
      loading: true,
      error: null,
    });
    return Promise.all([
      this.getContentFromUrl(
        `${BASE_DEV_URL}/model/${this.state.fileName}`,
      ).then(content =>
        this.formatContent(content, 'data:geometry/obj;base64,'),
      ),
      // this.getContentFromUrl(`${BASE_DEV_URL}/model/${this.state.fileName}.png`),
    ])
      .then(binaries => {
        const model = binaries[0];
        // const texture = binaries[1];
        this.setState({
          model,
          // texture,
          loading: false,
          error: null,
        });
      })
      .catch(e =>
        this.setState({
          loading: false,
          error: e || new Error('Something unexpected has happened.'),
        }),
      );
  };

  zoom = action => {
    let {zoom, translateZ} = this.state;

    this.state.zoom += action;

    Animated.timing(translateZ, {
      toValue: zoom,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };

  onMoveEnd = () => {
    this.setState({
      fromXY: undefined,
    });
  };

  onMove = e => {
    let {pageX, pageY} = e.nativeEvent,
      {rotateX, rotateZ, fromXY, valueXY} = this.state;
    if (!this.state.fromXY) {
      this.setState({
        fromXY: [pageX, pageY],
        valueXY: [rotateZ.__getValue(), rotateX.__getValue()],
      });
    } else {
      rotateZ.setValue(valueXY[0] + (pageX - fromXY[0]) / 2);
      rotateX.setValue(valueXY[1] + (pageY - fromXY[1]) / 2);
    }
  };

  renderGoBackButton() {
    // const navigation = useNavigation();
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    );
  }
  renderButton(label, method) {
    return (
      <TouchableOpacity onPress={method}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }

  renderModel(nextProps, nextState) {
    const {model, texture} = nextState;
    const textureSrc = {
      uri: texture,
    };
    const modelSrc = {
      uri: model,
    };

    let {rotateZ, rotateX, fromXY, translateZ} = this.state;

    return (
      <View style={{flex: 1}}>
        {this.renderGoBackButton()}
        <AnimatedModelView
          style={{flex: 1}}
          model={modelSrc}
          onStartShouldSetResponder={() => true}
          onResponderRelease={this.onMoveEnd}
          onResponderMove={this.onMove}
          scale={0.01}
          animate={!!fromXY}
          tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
          rotateX={rotateX}
          rotateZ={rotateZ}
          translateZ={translateZ}
          animate
        />
        <Animated.View style={[styles.buttons]}>
          {this.renderButton('zoom in', this.zoom.bind(this, 1))}
          {this.renderButton('zoom out', this.zoom.bind(this, -1))}
        </Animated.View>
      </View>
    );
  }
  renderControls(nextProps, nextState) {
    const {error, loading} = nextState;
    return (
      <View style={styles.controls}>
        {!!loading && <ActivityIndicator />}
        {!loading && (
          <TouchableOpacity
            style={styles.controlBox}
            disabled={loading}
            onPress={this.fetchRequestedModel}>
            <Text style={error ? styles.controlTextError : styles.controlText}>
              {error ? 'Retry' : 'Load'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  render() {
    const {model, texture} = this.state;
    return (
      <View style={styles.container}>
        {model
          ? // && texture
            this.renderModel(this.props, this.state)
          : this.renderControls(this.props, this.state)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  controlTextError: {
    color: 'red',
    fontSize: 30,
  },
  controlText: {
    color: 'black',
    fontSize: 30,
  },
  buttons: {
    height: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});
