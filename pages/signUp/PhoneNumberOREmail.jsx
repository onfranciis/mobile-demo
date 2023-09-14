import { View, Text } from "react-native";
import React, { useState } from "react";
import SignUpSecond from "./SignUpSecond";
import SignUpThird from "./SignUpThird";

const PhoneNumberOREmail = ({ navigation }) => {
  const [display, setDisplay] = useState(true);
  function displays(value) {
    if (value == "email") {
      return (
        <SignUpThird
          setDisplay={(e) => {
            setDisplay(e);
            console.log(e);
          }}
          navigation={navigation}
        />
      );
    } else
      return (
        <SignUpSecond
          setDisplay={(e) => {
            setDisplay(e);
            console.log(e);
          }}
          navigation={navigation}
        />
      );
  }

  return <>{displays(display)}</>;
};

export default PhoneNumberOREmail;
