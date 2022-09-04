import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Colors } from "../../Config";

const Next = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.Event}>
      <View style={styles.container}>
        <Text style={styles.text1}>{props.Text1}</Text>
        <Text style={styles.text2}>{props.Text2}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Next;

const styles = StyleSheet.create({
  container: {
    height: 54,
    width: "100%",
    backgroundColor: Colors.Shades[500],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.Shades[500],
    padding: 10,
  },
  text1: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    // marginHorizontal: 10,
  },
  text2: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    // marginHorizontal: 10,
    opacity: 0.6,
  },
});
