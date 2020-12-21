
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

class CustomCallout extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.amount}>{this.props.children}</View>
        </View>
        <View style={{
          height: 50,
          width: 100,
          borderRightWidth: 3,
          borderRadius: 1,
          transform: [{ rotate: '-10deg'}]
        }}>
        </View>
      </View>
    );
  }
}

CustomCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 200,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: "#F6B93B",
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 0.5,
    borderColor: "transparent"
  },
  amount: {
    flex: 1,
  },
  // arrow: {
  //   backgroundColor: 'transparent',
  //   borderWidth: 16,
  //   borderColor: 'transparent',
  //   borderTopColor: '#000000',
  //   alignSelf: 'center',
  //   marginTop: -32,
  // },
  // arrowBorder: {
  //   backgroundColor: 'transparent',
  //   borderWidth: 16,
  //   borderColor: 'transparent',
  //   borderTopColor: '"rgba(255,255,255,0.7)"',
  //   alignSelf: 'center',
  //   marginTop: -0.5,
  // },
});

export default CustomCallout;