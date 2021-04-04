import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

import ModelView from 'react-native-gl-model-view';
const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default class Multiple extends Component {
  constructor() {
    super();
    this.state = {
      rotateX: new Animated.Value(-90),
      rotateZ: new Animated.Value(0),

      fromXY: undefined,
      valueXY: undefined,
    };
  }

  onMoveEnd = () => {
    this.setState({
      fromXY: undefined,
    });
  };

  onMove = (e) => {
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
  
  renderModel() {
    return (
      <AnimatedModelView
        model={{
          uri: 'demon.model',
        }}
        texture={{
          uri: 'demon.png',
        }}
        tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        scale={0.01}
        translateZ={-2.5}
        rotateX={270}
        style={styles.model}
      />
    );
  }
  renderModel1() {
    let {rotateZ, rotateX, fromXY} = this.state;
    return (
      <AnimatedModelView
      model={{
        uri: 'teapot.obj',
      }}
      onStartShouldSetResponder={() => true}
      onResponderRelease={this.onMoveEnd}
      onResponderMove={this.onMove}
      animate={!!fromXY}
      tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
      scale={1}
      rotateX={rotateX}
      rotateZ={rotateZ}
      translateZ={-10}
      style={styles.model}
      />
    );
  }
  renderModel2() {
    let {rotateZ, rotateX, fromXY} = this.state;
    return (
      <AnimatedModelView
      model={{
        uri: 'basketball_OBJ.obj',
      }}

      onStartShouldSetResponder={() => true}
      onResponderRelease={this.onMoveEnd}
      onResponderMove={this.onMove}
      animate={!!fromXY}
      tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
      scale={8}
      rotateX={rotateX}
      rotateZ={rotateZ}
      translateZ={-10}
      style={styles.model}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {
          this.renderModel()
          }
          {
          this.renderModel1()
          }
          {
          this.renderModel2()
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'column',
  },
  model: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});