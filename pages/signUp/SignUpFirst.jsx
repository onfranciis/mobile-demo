import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

import TopNavigation from "../onboarding/TopNavigation";
import { Colors } from "../../Config";
import SignUpSingleBotton from "./SignUpSingleBotton";

const SignUpFirst = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [date, setDate] = useState("");

  const handleNext = () => {
    if (date == "") {
      setPrompt(true);
    } else {
      setPrompt(false);
      navigation.navigate("PhoneNumberOREmail");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>When is your birthday?</Text>
        <Text style={styles.text2}>
          This will not be shown publicly. We’ve got you some specials on that
          day!
        </Text>
      </View>

      <TextInput
        placeholder="mm-dd-yyyy"
        style={styles.input}
        placeholderTextColor="black"
        value={date}
        keyboardType="number-pad"
        onChangeText={(e) => {
          setDate(e);
          setPrompt(false);
        }}
      />

      {prompt ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Input your birthday</Text>
        </View>
      ) : (
        <View style={styles.prompt}>
          <Text style={styles.transparent}>Input your birthday</Text>
        </View>
      )}

      <SignUpSingleBotton
        Text1="Next- "
        Text2="Enter your phonenumber"
        Event={handleNext}
      />
    </ScrollView>
  );
};

export default SignUpFirst;

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
  next: {
    position: "absolute",
    bottom: 50,
  },
  transparent: {
    fontSize: 17,
    opacity: 0,
  },
});
