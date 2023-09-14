import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../Config";

const MessageRequestPreview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.imageParent}>
          <MaterialCommunityIcons
            name="email-fast-outline"
            color={Colors.Black}
            size={27}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyHead}>Message Requests</Text>
          <Text style={styles.bodyText}>3 People you may know</Text>
        </View>
      </View>
      <MaterialIcons name="arrow-forward-ios" color={Colors.Black} size={24} />
    </View>
  );
};

export default MessageRequestPreview;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageParent: {
    height: 56,
    width: 56,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
  },
  body: {
    marginLeft: 16,
  },
  bodyHead: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 6,
  },
  bodyText: {
    color: "#4E505A",
    fontWeight: "400",
    fontSize: 16,
  },
});
