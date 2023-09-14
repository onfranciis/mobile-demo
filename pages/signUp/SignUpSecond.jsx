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
import IntlPhoneField from "react-native-intl-phone-field";

import TopNavigation from "../onboarding/TopNavigation";
import { Colors } from "../../Config";
import SignUpSingleBotton from "./SignUpSingleBotton";

const SignUpSecond = ({ navigation, setDisplay }) => {
  const [selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [number, setNumber] = useState("");

  const handleNext = () => {
    if (number == "") {
      setPrompt(true);
    } else {
      setPrompt(false);
      navigation.navigate("SignUpFourth", { PhoneNumber: number });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>Enter your Phonenumber</Text>
        <Text style={styles.text2}>
          Your phone number will be used to improve your Go viral experience
          including connecting you with peoiple you may know and helping you
          recover your account if lost.
        </Text>
      </View>

      {/* <TextInput
        placeholder="mm-dd-yyyy"
        style={styles.input}
        placeholderTextColor="black"
        value={date}
        keyboardType="number-pad"
        onChangeText={(e) => {
          setDate(e);
          setPrompt(false);
        }}
      /> */}

      <IntlPhoneField
        onEndEditing={(result) => {
          //   console.log(result.value);
          setNumber(result.value);
        }}
        // onValidation={(isValid) => console.log(isValid)}
        flagUndetermined="     "
        defaultCountry="NG"
        defaultPrefix="+234"
        defaultFlag="🇳🇬"
        textInputStyle={styles.input}
        flagTextStyle={styles.inputFlag}
        containerStyle={styles.containerStyle}
      />

      <TouchableWithoutFeedback onPress={() => setDisplay("email")}>
        <Text style={styles.useEmail}>Use Email Address Instead</Text>
      </TouchableWithoutFeedback>

      {prompt ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Input your phone number</Text>
        </View>
      ) : (
        <View style={styles.prompt}>
          <Text style={styles.transparent}>Input your phone number</Text>
        </View>
      )}

      <SignUpSingleBotton Text1="Send me a code" Text2="" Event={handleNext} />
    </ScrollView>
  );
};

export default SignUpSecond;

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
  containerStyle: {
    borderBottomWidth: 0,
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
  inputFlag: {
    height: 54,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: Colors.Gray[400],
    borderRadius: 8,
    fontWeight: "500",
    fontSize: 16,
    padding: 9,
    paddingTop: 15,
    // marginBottom: 150,
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
