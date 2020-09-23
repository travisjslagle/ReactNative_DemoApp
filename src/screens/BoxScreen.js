import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxOneStyle: {
    backgroundColor: "orange",
    height: 100,
    width: 100,
  },
  boxTwoStyle: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
  },
  boxThreeStyle: {
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
