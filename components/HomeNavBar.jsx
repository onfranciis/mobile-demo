import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

const HomeNavBar = ({ navigation }) => {
  const [category, setCategory] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <View style={styles.picParent}>
          <Image
            style={styles.pic}
            source={require("../assets/Images/dude.png")}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.sections}>
        <TouchableWithoutFeedback onPress={() => setCategory(true)}>
          <Text
            style={[
              styles.following,
              { color: !category ? "rgba(255, 255, 255, 0.6)" : "white" },
            ]}
          >
            Following
          </Text>
        </TouchableWithoutFeedback>
        <Text style={styles.seperator}>|</Text>
        <TouchableWithoutFeedback onPress={() => setCategory(false)}>
          <Text
            style={[
              styles.forYou,
              { color: category ? "rgba(255, 255, 255, 0.6)" : "white" },
            ]}
          >
            For You
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Feather name="search" color="white" size={24} />
      </View>
    </View>
  );
};

export default HomeNavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 20,
    zIndex: 5,
    paddingHorizontal: 24,
    paddingTop: StatusBar.currentHeight,
  },
  picParent: {},
  pic: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  sections: {
    display: "flex",
    flexDirection: "row",
  },
  following: {
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "700",
    fontSize: 18,
  },
  seperator: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    marginHorizontal: 8,
  },
  forYou: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  searchParent: {},
  search: {
    height: 24,
    width: 24,
  },
});
