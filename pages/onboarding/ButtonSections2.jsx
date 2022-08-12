import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import { Colors } from "../../Config";
import Google from "../../assets/Images/GoogleIcon.png";

const ButtonSections = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.Text1Function();
        }}
      >
        <View style={styles.button1}>
          <Text style={styles.button1Text}>{props.Text1}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          props.Text2Function();
        }}
      >
        <View style={styles.button2}>
          <Text style={styles.button2Text}>{props.Text2}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ButtonSections;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 30,
  },
  button1: {
    flexDirection: "row",
    width: "45%",
    // backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.Primary,
    margin: 5,
    padding: 10,
  },
  button1Image: {},
  button1Text: {
    color: Colors.Primary,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  or: {
    marginVertical: 15,
  },
  button2: {
    flexDirection: "row",
    width: "45%",
    backgroundColor: Colors.Shades[500],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.Shades[500],
    padding: 10,
    margin: 5,
  },
  button2Image: {},
  button2Text: {
    color: "white",
    fontWeight: "600",
    marginHorizontal: 10,
  },
});
