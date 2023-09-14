import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RatingViewPost = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.number}>{props.Number}.</Text>
        <Image
          style={styles.profilePic}
          source={require("../../assets/Images/portrait/PortraitSquare1.jpg")}
        />
        <View style={styles.userParent}>
          <Text style={styles.user}>Leonard Ogbu</Text>
          <Text style={styles.username}>@Leonardesignz</Text>
        </View>
      </View>
      <View style={styles.countParent}>
        <Text style={styles.count}>12,000,000 Likes</Text>
        <Text style={styles.action}>View post</Text>
      </View>
    </View>
  );
};

export default RatingViewPost;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  section1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  number: {
    color: "black",
    fontWeight: "700",
    fontSize: 18,
  },
  profilePic: {
    height: 54,
    width: 54,
    borderRadius: 54,
    marginLeft: 5,
    marginRight: 10,
  },
  userParent: {},
  user: {
    color: "#191a1f",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
  },
  username: {
    color: "#4e505a",
    fontWeight: "400",
    fontSize: 16,
  },
  countParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  count: {
    color: "#4e505a",
    fontWeight: "400",
    fontSize: 16,
    marginBottom: 10,
  },
  action: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
