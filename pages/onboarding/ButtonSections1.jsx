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
      <View style={styles.button1}>
        <Image source={Google} style={styles.button1Image} />
        <Text style={styles.button1Text}>Continue with Google</Text>
      </View>

      <Text style={styles.or}>or</Text>

      <TouchableWithoutFeedback onPress={() => props.CreateAccount()}>
        <View style={styles.button2}>
          <Text style={styles.button2Text}>Create an account</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ButtonSections;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  button1: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.Primary,
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
    width: "100%",
    backgroundColor: Colors.Shades[500],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.Shades[500],
    padding: 10,
  },
  button2Image: {},
  button2Text: {
    color: "white",
    fontWeight: "600",
    marginHorizontal: 10,
  },
});
