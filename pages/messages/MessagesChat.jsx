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
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

import { Colors } from "../../Config";
import ChatText1 from "./ChatText1";
import ChatText2 from "./ChatText2";
import MessageInput from "./MessageInput";

const DATA = [
  { id: "1", message: "Boss", time: "5pm", status: "read", user: 1 },
  { id: "2", message: "Wassup", time: "5pm", status: "read", user: 2 },
  {
    id: "3",
    message: "You're Alvin right?",
    time: "5pm",
    status: "read",
    user: 1,
  },
  { id: "4", message: "Yh", time: "5pm", status: "read", user: 2 },
  { id: "5", message: "Have we met?", time: "5pm", status: "read", user: 2 },
  { id: "6", message: "Not really", time: "5pm", status: "read", user: 1 },
  { id: "7", message: "😁", time: "5pm", status: "read", user: 1 },
  {
    id: "8",
    message: "I remember your pic now, you're Leonard",
    time: "5pm",
    status: "read",
    user: 2,
  },
  { id: "9", message: "Bruhhh!!!", time: "5pm", status: "read", user: 2 },
  {
    id: "20",
    message: "Your designs are lit🔥",
    time: "5pm",
    status: "read",
    user: 2,
  },
  {
    id: "11",
    message: "No dey whine me boss 😂",
    time: "5pm",
    status: "read",
    user: 1,
  },
  {
    id: "12",
    message: "I'm comming, give me a minuite",
    time: "5pm",
    status: "read",
    user: 2,
  },
  { id: "13", message: "Ok", time: "5pm", status: "unread", user: 1 },
];

const DATA2 = [];

const renderItem = ({ item }) =>
  item.user == 1 ? (
    <ChatText1 Message={item.message} Time={item.time} Status={item.status} />
  ) : (
    <ChatText2 Message={item.message} Time={item.time} Status={item.status} />
  );

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.details}>
      <Image
        style={styles.profilePic}
        source={require("../../assets/Images/portrait/PortraitSquare2.jpg")}
      />

      <Text style={styles.detailsName}>Leonard Ogbu</Text>
      <Text style={styles.detailsUsername}>@leonardesignz</Text>

      <View style={styles.stats}>
        <View style={styles.following}>
          <Text style={styles.number}>453</Text>
          <Text style={styles.tag}>Following</Text>
        </View>

        <View style={styles.followers}>
          <Text style={styles.number}>453</Text>
          <Text style={styles.tag}>Followers</Text>
        </View>
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.view}>View Profile</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const MessagesChat = ({ navigation }) => {
  const [messagesUpdate, setMessagesUpdate] = useState(DATA);
  const FlatListRef = useRef();

  const handleSend = (data) => {
    var duration = moment(new Date()).format("hh:mm:ssa");
    // console.log(duration);
    console.log(DATA.length);

    setMessagesUpdate(
      DATA.push({
        id: `${DATA.length + 1}_1_${duration}_${data}`,
        message: data,
        time: duration,
        status: "unread",
        user: 1,
      })
    );

    FlatListRef.current.scrollToIndex({ index: DATA.length - 1 });
  };

  const handleSend2 = (data) => {
    var duration = moment(new Date()).format("hh:mm:ssa");
    // console.log(duration);
    console.log(DATA.length);

    setMessagesUpdate(
      DATA.push({
        id: `${DATA.length + 1}_2_${duration}_${data}`,
        message: data,
        time: duration,
        status: "unread",
        user: 2,
      })
    );

    // FlatListRef.current.scrollToIndex({ index: DATA.length - 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headingLeft}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.Black}
              size={24}
            />
          </TouchableWithoutFeedback>

          <View style={styles.user}>
            <Text style={styles.name}>Leonard Ogbu</Text>
            <Text style={styles.username}>@leonardesignz</Text>
          </View>
        </View>

        <View style={styles.info}>
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          ref={FlatListRef}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
          //   ListEmptyComponent={NoMessages}
          ListHeaderComponent={Details}
          extraData={messagesUpdate}
        />
      </View>
      <MessageInput
        handleSend={(e) => {
          handleSend(e);
        }}
        handleSend2={(e) => {
          handleSend2(e);
        }}
      />
    </View>
  );
};

export default MessagesChat;

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
    marginBottom: 24,
  },
  headingLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePic: {
    height: 36,
    width: 36,
    borderRadius: 36,
  },
  user: {
    marginLeft: 20,
  },
  name: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 6,
  },
  username: {
    color: "#353741",
    fontWeight: "400",
    fontSize: 14,
  },
  info: {},
  body: {
    // height: "100%",
    flex: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginBottom: 8,
  },
  detailsName: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 1,
  },
  detailsUsername: {
    color: "#353741",
    fontWeight: "400",
    fontSize: 14,
    marginBottom: 8,
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  following: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
  },
  tag: {
    color: "#4E505A",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 8,
  },
  followers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  view: {
    color: Colors.Primary,
    fontWeight: "400",
    fontSize: 14,
    borderColor: Colors.Primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 45,
  },
});
