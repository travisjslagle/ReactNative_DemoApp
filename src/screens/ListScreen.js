import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "36" },
    { name: "Friend #2", age: "24" },
    { name: "Friend #3", age: "30" },
    { name: "Friend #4", age: "45" },
    { name: "Friend #5", age: "62" },
    { name: "Friend #6", age: "55" },
    { name: "Friend #7", age: "36" },
    { name: "Friend #8", age: "27" },
    { name: "Friend #9", age: "23" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 10,
    borderColor: "blue",
    borderWidth: 1,
    padding: 20,
  },
});

export default ListScreen;
