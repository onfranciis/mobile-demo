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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../Config";

const Privacy = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(!isEnabled1);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color={Colors.Black} size={24} />
        </TouchableWithoutFeedback>

        <Text style={styles.title}>Privacy</Text>

        <View style={styles.info}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.DFA}>
          <Text style={styles.text1}>Privacy account</Text>
          <View style={styles.section1}>
            <Text style={styles.text2}>
              Only users who follow you and you approve can view contents
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

        <View>
          <Text style={styles.sectionTitle}>PRIVACY PREFERENCES</Text>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("CommentsSettings")}
          >
            <View style={styles.button}>
              <View style={styles.buttonLeft}>
                <FontAwesome name="comment-o" color="#4E505A" size={24} />
                <Text style={styles.buttonText}>Comments</Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                color="#4E505A"
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Privacy")}
          >
            <View style={styles.button}>
              <View style={styles.buttonLeft}>
                <Ionicons name="at-sharp" color="#4E505A" size={24} />
                <Text style={styles.buttonText}>Mentions and tags</Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                color="#4E505A"
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Privacy")}
          >
            <View style={styles.button}>
              <View style={styles.buttonLeft}>
                <MaterialIcons
                  name="send"
                  color="#4E505A"
                  size={24}
                  style={styles.send}
                />
                <Text style={styles.buttonText}>Direct messages</Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                color="#4E505A"
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Privacy")}
          >
            <View style={styles.button}>
              <View style={styles.buttonLeft}>
                <MaterialIcons name="block-flipped" color="#4E505A" size={24} />
                <Text style={styles.buttonText}>Blocked accounts</Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                color="#4E505A"
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Privacy;

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
  sectionTitle: {
    color: " rgba(78, 80, 90, 1)",
    fontWeight: "400",
    fontSize: 14,
    marginVertical: 16,
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
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  buttonLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  buttonText: {
    color: "rgba(25, 26, 31, 1)",
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20,
  },
  send: {
    transform: [{ rotateZ: "-50deg" }],
    marginTop: -5,
  },
});
