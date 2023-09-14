import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

import TopNavigation from "../onboarding/TopNavigation";
import { Colors } from "../../Config";
import SignUpSingleBotton from "./SignUpSingleBotton";

const SignUpFifth = ({ navigation, setDisplay }) => {
  const [selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleNext = () => {
    if (password1 == "") {
      setPrompt("input");
    } else {
      setPrompt("");
    }

    if (password1 !== password2) {
      setPrompt("match");
    }
    navigation.navigate("Main");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>Set a password</Text>
        <Text style={styles.text2}>
          You’d need this to enter this when logging in with your email address
          or Username.
        </Text>
      </View>

      <TextInput
        placeholder="Password"
        style={[styles.input, styles.input1]}
        placeholderTextColor="black"
        value={password1}
        // keyboardType="visible-password"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={(e) => {
          setPassword1(e);
          setPrompt("");
        }}
      />

      <TextInput
        placeholder="Re-type password"
        style={styles.input}
        placeholderTextColor="black"
        value={password2}
        // keyboardType="visible-password"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={(e) => {
          setPassword2(e);
          setPrompt("");
        }}
      />

      {prompt == "input" ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Input your password</Text>
        </View>
      ) : prompt == "match" ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Passwords do not match</Text>
        </View>
      ) : (
        <View style={styles.prompt}>
          <Text style={styles.transparent}>Good</Text>
        </View>
      )}

      {/* {prompt2 ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Passwords do not match</Text>
        </View>
      ) : (
        <View style={styles.prompt}>
          <Text style={styles.transparent}>Passwords do not match</Text>
        </View>
      )} */}

      <SignUpSingleBotton
        Text1="Confirm password"
        Text2=""
        Event={handleNext}
      />
    </ScrollView>
  );
};

export default SignUpFifth;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    // backgroundColor: "red",
    // height: "100vh",
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    // backgroundColor: "red",
    // width: 250,
    // flexDirection: "row"
    marginVertical: 50,
  },
  text1: {
    fontSize: 24,
    // lineHeight: 48,
    fontWeight: "700",
    textAlign: "center",
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.Gray[600],
    textAlign: "center",
    marginTop: 10,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  prompt: {
    marginVertical: 10,
    // marginBottom: 100,
  },
  promptText: {
    color: Colors.Primary,
    fontSize: 17,
    marginVertical: 10,
  },
  skip: {
    width: "100%",
    // backgroundColor: "red",
    // alignSelf: "flex-start",
    position: "absolute",
    bottom: 20,
    // left: 0,
  },
  input: {
    height: 54,
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: Colors.Gray[400],
    borderRadius: 8,
    fontWeight: "500",
    fontSize: 16,
    padding: 9,
    paddingHorizontal: 15,
    // marginBottom: 150,
  },
  input1: {
    marginBottom: 20,
  },
  next: {
    position: "absolute",
    bottom: 50,
  },
  transparent: {
    fontSize: 17,
    opacity: 0,
    marginVertical: 10,
  },
  useEmail: {
    width: "100%",
    // backgroundColor: "red",
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 20,
  },
});
