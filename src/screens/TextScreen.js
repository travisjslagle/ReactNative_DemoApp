import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
// import { State } from "react-native-gesture-handler";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      {/* there are two important props to pass to TextInput components to stop
       ios from auto-correcting the field (emails, usernames, etc.) */}
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>
          {" "}
          Password must be at least, 6 characters. You have: {password.length}.
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
