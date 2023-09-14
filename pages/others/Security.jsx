import {
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../Config";

const Security = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color={Colors.Black} size={24} />
        </TouchableWithoutFeedback>

        <Text style={styles.title}>Security</Text>

        <View style={styles.info}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.DFA}>
          <Text style={styles.text1}>Double factor authentication</Text>
          <View style={styles.section1}>
            <Text style={styles.text2}>
              2- Step verification offers extra security to prevent externals
              from acessing your account
            </Text>
            <Switch
              trackColor={{
                false: "rgba(25, 26, 31, 1)",
                true: Colors.Shades[300],
              }}
              thumbColor={isEnabled1 ? Colors.Primary : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>

        <View style={styles.section2}>
          <Text style={styles.text1}>Save Login Info</Text>
          <Switch
            trackColor={{
              false: "rgba(25, 26, 31, 1)",
              true: Colors.Shades[300],
            }}
            thumbColor={isEnabled2 ? Colors.Primary : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 23,
  },
  title: {
    color: "#353741",
    fontWeight: "600",
    fontSize: 18,
  },
  info: {},
  body: {
    paddingHorizontal: 15,
  },
  section1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 12,
  },
  section2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  text1: {
    color: "rgba(25, 26, 31, 1)",
    fontWeight: "600",
    fontSize: 16,
  },
  text2: {
    color: "rgba(78, 80, 90, 1)",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
    marginRight: 5,
  },
  DFA: {
    // height: "auto",
    // flex: 1,
  },
});
