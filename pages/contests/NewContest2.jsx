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
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SignUpSingleBotton from "../signUp/SignUpSingleBotton";
import { Colors } from "../../Config";

const NewContest2 = ({ navigation }) => {
  // const navigation = useNavigation;
  const handleNext = () => {
    navigation.navigate("ContestCover");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.buttonParent}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.Black}
              size={24}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.heading}>
          <Text style={styles.navTitle}>Schedule your contest</Text>
          <Text style={styles.navSubtitle}>Step 2 of 2</Text>
        </View>
        <View style={styles.buttonParent}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <View style={styles.descriptionParent}>
        <Text style={styles.descriptionText}>When should it start?</Text>
      </View>
      <View style={styles.privateParent}>
        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Date"
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Time"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.descriptionParent}>
        <Text style={styles.descriptionText}>When should it end?</Text>
      </View>
      <View style={styles.privateParent}>
        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Date"
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Time"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.rank}>
        <Text style={styles.rankText}>Rank participants by:</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholderTextColor="#4e505a"
          placeholder="Highest Likes"
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.nextParent}>
        <SignUpSingleBotton
          Text1="Schedule Contest"
          Text2=""
          Event={handleNext}
        />
      </View>
    </ScrollView>
  );
};

export default NewContest2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#CFD1D8",
    borderBottomWidth: 1,
    paddingHorizontal: 23,
    paddingTop: 10,
    marginBottom: 37,
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
    height: 54,
    width: 140,
    lineHeight: 22,
    borderColor: Colors.Gray[400],
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 8,
    // textAlignVertical: "top",
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 36,
  },
  privateParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 23,
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
  rank: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 23,
  },
  rankText: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 15,
  },
  nextParent: {
    paddingHorizontal: 23,
  },
});
