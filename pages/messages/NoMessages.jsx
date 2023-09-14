import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NoMessages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You haven't started any conversation!</Text>
    </View>
  );
};

export default NoMessages;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    color: "#4E505A",
    fontWeight: "600",
    fontSize: 16,
    fontStyle: "italic",
  },
});
