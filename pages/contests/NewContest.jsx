import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SignUpSingleBotton from "../signUp/SignUpSingleBotton";
import { Colors } from "../../Config";

const NewContest = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handleNext = () => {
    navigation.navigate("New", { screen: "NewContest2" });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.buttonParent}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.Black}
              size={24}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.heading}>
          <Text style={styles.navTitle}>Schedule your contest</Text>
          <Text style={styles.navSubtitle}>Step 1 of 2</Text>
        </View>
        <View style={styles.buttonParent}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>
      <View style={styles.imageParent}>
        <MaterialCommunityIcons
          name="image-plus"
          color={Colors.Black}
          size={36}
        />
      </View>
      <View style={styles.descriptionParent}>
        <Text style={styles.descriptionText}>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Tell your participants more about this contest"
          multiline={true}
          numberOfLines={1000}
        />
      </View>
      <View style={styles.privateParent}>
        <Text style={styles.private}>Private</Text>
        <View style={styles.privateTextParent}>
          <Text style={styles.privateText}>
            When you post this contest only your followers would be able to
            participate.
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: Colors.Shades[300] }}
            thumbColor={isEnabled ? Colors.Primary : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.nextParent}>
        <SignUpSingleBotton
          Text1="Next"
          Text2=" - Schedule"
          Event={handleNext}
        />
      </View>
    </ScrollView>
  );
};

export default NewContest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 23,
    paddingTop: 10,
  },
  buttonParent: {
    paddingTop: 5,
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navTitle: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
  },
  navSubtitle: {
    color: "#4E505A",
    fontWeight: "400",
    fontSize: 18,
    marginBottom: 17,
  },
  imageParent: {
    height: 161,
    width: "100%",
    backgroundColor: "#CFD1D8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {},
  descriptionParent: {
    paddingHorizontal: 23,
  },
  descriptionText: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionInput: {
    height: 112,
    width: "100%",
    lineHeight: 22,
    borderColor: Colors.Gray[400],
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 8,
    textAlignVertical: "top",
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 36,
  },
  privateParent: {
    paddingHorizontal: 23,
    marginBottom: 50,
  },
  private: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  privateTextParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  privateText: {
    color: "#4E505A",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
  privateToggle: {
    // flex: 1,
  },
  nextParent: {
    paddingHorizontal: 23,
  },
});
