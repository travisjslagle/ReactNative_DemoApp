import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>This is actually amazing</Text>
      <Button
        style={styles.button}
        title="Go to Components Demo"
        // there is an object called navigation that is passed in to this Screen because we are using Stack Navigator in the home screen
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        style={styles.button}
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        style={styles.button}
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        style={styles.button}
        title="Go to Text Demo"
        onPress={() => props.navigation.navigate("Text")}
      />
      <Button
        style={styles.button}
        title="Go to Box Demo"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default HomeScreen;
