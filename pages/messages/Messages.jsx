import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../Config";
import MessageRequestPreview from "./MessageRequestPreview";
import MessageUnreadPreview from "./MessageUnreadPreview";
import NoMessages from "./NoMessages";

const DATA = [
  {
    id: "1",
    link: require("../../assets/Images/unsplash.png"),
  },
  { id: "2", link: require("../../assets/Images/BackgroundImage1.jpg") },
  { id: "3", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "4", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "5", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "6", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "7", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "8", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "9", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "10", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "11", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "12", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "13", link: require("../../assets/Images/BackgroundImage2.jpg") },
];

const DATA2 = [];

const Messages = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <MessageUnreadPreview navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image
          style={styles.profilePic}
          source={require("../../assets/Images/portrait/PortraitSquare2.jpg")}
        />
        <Text style={styles.title}>Messages</Text>
        <View style={styles.search}>
          <Feather name="search" color="black" size={24} />
        </View>
      </View>
      <View style={styles.more}>
        <Text style={styles.moreText}>View all activities on your account</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          color={Colors.Black}
          size={24}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={NoMessages}
          ListHeaderComponent={MessageRequestPreview}
        />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  profilePic: {
    height: 36,
    width: 36,
    borderRadius: 36,
  },
  title: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
  },
  search: {},
  more: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  moreText: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
  body: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
  },
});
