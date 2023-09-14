import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
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

const ProfileSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" color={Colors.Black} size={24} />
        </TouchableWithoutFeedback>

        <Text style={styles.title}>User profile settings</Text>

        <View style={styles.info}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ManageAccount")}
          >
            <View style={styles.button}>
              <Feather name="user" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Manage account</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Security")}
          >
            <View style={styles.button}>
              <MaterialIcons name="verified-user" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Security</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Privacy")}
          >
            <View style={styles.button}>
              <MaterialIcons name="lock-outline" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Privacy</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <Ionicons
                name="notifications-outline"
                color="#4E505A"
                size={24}
              />
              <Text style={styles.buttonText}>Notifications</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUPPORT</Text>
          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <AntDesign name="edit" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Send a feedback</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <Feather name="help-circle" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Help & Support</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ABOUT</Text>
          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <MaterialCommunityIcons
                name="account-group-outline"
                color="#4E505A"
                size={24}
              />
              <Text style={styles.buttonText}>Community Guidelines</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <MaterialCommunityIcons
                name="text-box-outline"
                color="#4E505A"
                size={24}
              />
              <Text style={styles.buttonText}>
                Terms and conditions of Go Viral
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <FontAwesome name="sticky-note-o" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Privacy Policy</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COMING SOON</Text>
          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <MaterialCommunityIcons
                name="advertisements"
                color="#4E505A"
                size={24}
              />
              <Text style={styles.buttonText}>Ads</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={styles.button}>
              <Feather name="gift" color="#4E505A" size={24} />
              <Text style={styles.buttonText}>Referral Program</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileSettings;

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
  body: {},
  section: {
    paddingBottom: 26,
    paddingLeft: 20,
    borderTopColor: "rgba(0, 0, 0, 0.12)",
    borderTopWidth: 1,
  },
  sectionTitle: {
    color: " rgba(78, 80, 90, 1)",
    fontWeight: "400",
    fontSize: 14,
    marginVertical: 16,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "rgba(25, 26, 31, 1)",
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20,
  },
});
