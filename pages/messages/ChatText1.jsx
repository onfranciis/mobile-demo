import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Config";

const ChatText1 = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textParent}>
        <Text style={styles.text}>{props.Message}</Text>
      </View>

      <View style={styles.stamp}>
        <Text style={styles.time}>{props.Time}</Text>
        {props.Status == "read" ? (
          <Ionicons
            name="checkmark-done-sharp"
            color={Colors.Black}
            size={20}
          />
        ) : (
          <Ionicons name="checkmark-sharp" color={Colors.Black} size={20} />
        )}
      </View>
    </View>
  );
};

export default ChatText1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
    marginBottom: 5,
  },
  textParent: {
    maxWidth: "90%",
  },
  text: {
    backgroundColor: "#CFD1D8",
    color: "black",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
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
