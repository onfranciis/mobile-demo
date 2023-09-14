import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../Config";

const MessageUnreadPreview = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("MessagesChat")}
    >
      <View style={styles.container}>
        <View style={styles.imageParent}>
          <MaterialCommunityIcons name="" color={Colors.Black} size={27} />
        </View>
        <View style={styles.details}>
          <View style={styles.body}>
            <Text style={styles.bodyHead}>Leonard Ogbu</Text>
            <Text style={styles.bodyText}>4 messages</Text>
          </View>
          <Text style={styles.time}>54 mins ago</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageUnreadPreview;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    paddingBottom: 17,
  },
  imageParent: {
    height: 56,
    width: 56,
    backgroundColor: "#d9d9d9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 17,
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
    fontWeight: "600",
    fontSize: 16,
  },
  time: {
    color: "#7E8191",
    alignSelf: "flex-end",
  },
});
