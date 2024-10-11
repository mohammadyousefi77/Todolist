import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.squre}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#FFF",
    borderWidth: 1.3,
    borderColor: "#BBDEFB",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squre: {
    width: 24,
    height: 24,
    backgroundColor: "#42A5F5",
    opacity: 0.4,
    borderRadius: 5,
    margin: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 18,
    fontWeight: "800",
    // writingDirection: "rtl", //OR "auto"
    // textAlign: "right",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
