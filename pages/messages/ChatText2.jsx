import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Config";

const ChatText2 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textParent}>
        <Text style={styles.text}>{props.Message}</Text>
      </View>

      <View style={styles.stamp}>
        <Text style={styles.time}>{props.Time}</Text>
      </View>
    </View>
  );
};

export default ChatText2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 20,
    marginBottom: 5,
  },
  textParent: {
    maxWidth: "90%",
  },
  text: {
    backgroundColor: "#191A1F",
    color: "white",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
  },
  stamp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 2,
  },
  time: {
    color: "#7E8191",
    fontWeight: "400",
    fontSize: 12,
    marginRight: 8,
  },
});
