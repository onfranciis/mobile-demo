import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypto from "react-native-vector-icons/Entypo";
import { Colors } from "../../Config";

const ContestPostPreview = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.Image} />

      <View style={styles.pinned}>
        {props.Pinned ? (
          // <Text style={styles.pinnedText}>Pinned</Text>
          <Entypto name="pin" color={Colors.White} size={24} />
        ) : (
          <Text></Text>
        )}
      </View>

      <View style={styles.play}>
        <MaterialCommunityIcons name="play" color="white" size={24} />
        <Text style={styles.count}>{props.Count}</Text>
      </View>
    </View>
  );
};

export default ContestPostPreview;

const styles = StyleSheet.create({
  container: {
    height: 158,
    width: 143,
    minWidth: 143,
    flex: 1,
    position: "relative",
    margin: 2,
  },
  image: {
    height: 158,
    width: "100%",
  },
  play: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 8,
    left: 0,
  },
  count: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  pinned: {
    // backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 3,
    position: "absolute",
    top: 8,
    right: 7,
  },
  pinnedText: {
    color: "white",
    fontWeight: "400",
    fontSize: 12,
    paddingHorizontal: 8,
  },
});
