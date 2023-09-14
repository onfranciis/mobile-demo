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
import React, { useRef, useState } from "react";

import TopNavigation from "../onboarding/TopNavigation";
import { Colors } from "../../Config";
import SignUpSingleBotton from "./SignUpSingleBotton";
import Countdown from "./Countdown";

const SignUpFourth = ({ route, navigation, setDisplay }) => {
  const [selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const [blueBorder1, setBlueBorder1] = useState(Colors.Gray[400]);
  const [blueBorder2, setBlueBorder2] = useState(Colors.Gray[400]);
  const [blueBorder3, setBlueBorder3] = useState(Colors.Gray[400]);
  const [blueBorder4, setBlueBorder4] = useState(Colors.Gray[400]);
  const { PhoneNumber } = route?.params;

  const handleNext = () => {
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
      setPrompt(true);
    } else {
      setPrompt(false);
      navigation.navigate("SignUpFifth");
    }
  };

  const changeBorderColor = () => {
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
      return false;
    } else {
      return true;
    }
  };

  const clearInput = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
  };

  const clearOnCompleted = () => {
    if (true) {
      setBlueBorder1(Colors.Gray[400]);
      setBlueBorder2(Colors.Gray[400]);
      setBlueBorder3(Colors.Gray[400]);
      setBlueBorder4(Colors.Gray[400]);
      console.log(input4);
    }
  };

  const onCompleted = () => {
    if (true) {
      setBlueBorder1(Colors.Success);
      setBlueBorder2(Colors.Success);
      setBlueBorder3(Colors.Success);
      setBlueBorder4(Colors.Success);
      console.log(input4);
    }
  };

  const showError = () => {
    if (true) {
      setBlueBorder1(Colors.Error);
      setBlueBorder2(Colors.Error);
      setBlueBorder3(Colors.Error);
      setBlueBorder4(Colors.Error);
      console.log(input4);
    }
  };

  const checkFields = () => {
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
      console.log("empty");
    } else {
      console.log("not empty");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>Enter 4-digit OTP code</Text>
        <Text style={styles.text2}>
          Your code was sent to{" "}
          <Text style={styles.detail}>{`${PhoneNumber}`}</Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="-"
          style={[styles.input, { borderColor: blueBorder1 }]}
          placeholderTextColor="black"
          value={input1}
          keyboardType="decimal-pad"
          ref={input1Ref}
          maxLength={1}
          onChangeText={(e) => {
            setInput1(e);
            setPrompt(false);
            console.log(e);
            clearOnCompleted();
            if (e.length == 0) {
              input1Ref.current.focus();
            } else {
              input2Ref.current.focus();
            }
          }}
          onFocus={() => {
            setBlueBorder1(Colors.Primary);
          }}
          onBlur={() => {
            setBlueBorder1(Colors.Gray[400]);
          }}
        />

        <TextInput
          placeholder="-"
          style={[styles.input, { borderColor: blueBorder2 }]}
          placeholderTextColor="black"
          value={input2}
          keyboardType="decimal-pad"
          ref={input2Ref}
          maxLength={1}
          onChangeText={(e) => {
            setInput2(e);
            setPrompt(false);
            input3Ref.current.focus();
            clearOnCompleted();
            if (e.length == 0) {
              input1Ref.current.focus();
            }
          }}
          onFocus={() => {
            setBlueBorder2(Colors.Primary);
          }}
          onBlur={() => {
            setBlueBorder2(Colors.Gray[400]);
          }}
        />

        <TextInput
          placeholder="-"
          style={[styles.input, { borderColor: blueBorder3 }]}
          placeholderTextColor="black"
          value={input3}
          keyboardType="decimal-pad"
          ref={input3Ref}
          maxLength={1}
          onChangeText={(e) => {
            setInput3(e);
            setPrompt(false);
            clearOnCompleted();
            input4Ref.current.focus();
            if (e.length == 0) {
              input2Ref.current.focus();
            }
          }}
          onFocus={() => {
            setBlueBorder3(Colors.Primary);
          }}
          onBlur={() => {
            setBlueBorder3(Colors.Gray[400]);
          }}
        />

        <TextInput
          placeholder="-"
          style={[styles.input, { borderColor: blueBorder4 }]}
          placeholderTextColor="black"
          value={input4}
          keyboardType="decimal-pad"
          ref={input4Ref}
          maxLength={1}
          onChangeText={(e) => {
            setInput4(e);
            setPrompt(false);
            clearOnCompleted();
            if (e.length == 0) {
              input3Ref.current.focus();
            } else {
              input4Ref.current.blur();
              checkFields();
              // onCompleted();
            }
          }}
          onFocus={() => {
            setBlueBorder4(Colors.Primary);
          }}
          onBlur={() => {
            setBlueBorder4(Colors.Gray[400]);
          }}
        />
      </View>

      <View style={styles.timerDetails}>
        <Text style={styles.code}>
          <Text style={styles.text2}>Didn't get a code? </Text>
          <Text style={styles.text3}>Request phone call</Text>
        </Text>

        {/* <Text style={styles.timer} onPress={() => clearInput()}>
          <Text style={styles.text2}>Resend in </Text>
          <Text style={styles.text3}>00:54</Text>
        </Text> */}

        <Countdown />
      </View>

      {prompt ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Input your OTP</Text>
        </View>
      ) : (
        <View style={styles.prompt}>
          <Text style={styles.transparent}>Input your OTP</Text>
        </View>
      )}

      <SignUpSingleBotton
        Text1="Confirm code - "
        Text2="Set a password"
        Event={handleNext}
      />
    </ScrollView>
  );
};

export default SignUpFourth;

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
  timerDetails: {
    marginVertical: 10,
    alignItems: "center",
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
  text3: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.Black,
    textAlign: "center",
    marginTop: 10,
  },
  detail: {},
  code: {
    marginBottom: 10,
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
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    height: 54,
    width: 40,
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: Colors.Gray[400],
    borderRadius: 8,
    fontWeight: "500",
    fontSize: 16,
    padding: 9,
    paddingHorizontal: 15,
    marginHorizontal: 5,
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
});
