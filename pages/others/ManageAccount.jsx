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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../Config";

const ManageAccount = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color={Colors.Black} size={24} />
        </TouchableWithoutFeedback>

        <Text style={styles.title}>Manage account</Text>

        <View style={styles.info}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.text1}>Phone number</Text>
          <Text style={styles.text2}>+234703*******72</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text1}>Email address</Text>
          <Text style={styles.text2}>Le*****@gmail.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text1}>Password</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text1}>Deactivate my account</Text>
          <Switch
            trackColor={{
              false: "rgba(25, 26, 31, 1)",
              true: Colors.Shades[300],
            }}
            thumbColor={isEnabled ? Colors.Primary : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.delete}>Delete account</Text>
        </View>
      </View>
    </View>
  );
};

export default ManageAccount;

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
  section: {
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
  },
  delete: {
    color: "rgba(221, 46, 68, 1)",
    fontWeight: "600",
    fontSize: 16,
  },
});
