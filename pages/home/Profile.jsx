import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../../Config";
import ContestPostPreview from "../contests/ContestPostPreview";

const DATA = [
  {
    id: "1",
    link: require("../../assets/Images/unsplash.png"),
    pinned: true,
    count: "12k",
  },
  {
    id: "2",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "3",
    link: require("../../assets/Images/BackgroundImage1.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "4",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "5",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "6",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "7",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "8",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
  {
    id: "9",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
    pinned: false,
    count: "12k",
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const [tab, setTab] = useState("Grid");
  const [followed, setFollowed] = useState(false);
  const { height, width } = useWindowDimensions();

  const responsiveFlatlist = () => {
    // console.log("width is ", width);
    // console.log("length is ", DATA.length);
    // console.log(Math.floor(width / 144));
    return Math.floor(width / 144);
  };

  const renderItem = ({ item }) => (
    <ContestPostPreview
      navigation={navigation}
      Count={item.count}
      Image={item.link}
      Pinned={item.pinned}
    />
  );

  const FlatlistHead = () => {
    return (
      <>
        <View style={styles.heading}>
          <View style={styles.headingLeft}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                color={Colors.Black}
                size={24}
              />
            </TouchableWithoutFeedback>

            <Text style={styles.username}>leonardesignz</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ProfileSettings")}
          >
            <View style={styles.info}>
              <MaterialIcons
                name="info-outline"
                color={Colors.Black}
                size={24}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.profile}>
          <View style={styles.profilePicParent}>
            <Image style={styles.profilePic} />
            <MaterialIcons
              name="verified"
              color="rgba(126, 129, 145, 1)"
              size={24}
              style={styles.verified}
            />
          </View>

          <View style={styles.profileDetails}>
            <View style={styles.user}>
              <Text style={styles.name}>Leonard Ogbu</Text>
              <Text style={styles.username}>@leonardesignz</Text>
            </View>

            <Text style={styles.bio}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              veniam blanditiis nulla facere! Dignissimos
            </Text>
          </View>
        </View>

        <View style={styles.stat}>
          <View style={styles.section}>
            <Text style={styles.count}>453</Text>
            <Text style={styles.tag}>Posts</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.count}>453</Text>
            <Text style={styles.tag}>Following</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.count}>453</Text>
            <Text style={styles.tag}>Followers</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableWithoutFeedback
            onPress={() => {
              setFollowed(!followed);
            }}
          >
            <View
              style={[
                styles.followParent,
                {
                  backgroundColor: followed
                    ? Colors.Primary
                    : "rgba(53, 55, 65, 1)",
                },
              ]}
            >
              <Text
                style={[
                  styles.follow,
                  {
                    color: followed ? "white" : "rgba(207, 209, 216, 1)",
                  },
                ]}
              >
                {followed ? "Following" : "Follow"}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.dmParent}>
            <Text style={styles.dm}>Direct Message</Text>
          </View>

          <View style={styles.giftParent}>
            <Feather
              name="gift"
              color="rgba(78, 80, 90, 1)"
              size={24}
              style={styles.gift}
            />
          </View>
        </View>

        <View style={styles.tabParent}>
          <TouchableWithoutFeedback onPress={() => setTab("Grid")}>
            <View style={[styles.tab]}>
              <View style={styles.icons}>
                <MaterialCommunityIcons
                  name="grid"
                  color={tab == "Grid" ? "black" : "rgba(78, 80, 90, 1)"}
                  size={24}
                  style={styles.verified}
                />
              </View>
              <View style={[styles.bottom]}>
                <View
                  style={[
                    styles.cursor,
                    {
                      backgroundColor: tab == "Grid" ? "black" : "transparent",
                    },
                  ]}
                ></View>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setTab("Contest")}>
            <View style={[styles.tab]}>
              <View style={styles.icons}>
                <MaterialCommunityIcons
                  name="sword-cross"
                  color={tab == "Contest" ? "black" : "rgba(78, 80, 90, 1)"}
                  size={24}
                  style={styles.verified}
                />
              </View>
              <View style={[styles.bottom]}>
                <View
                  style={[
                    styles.cursor,
                    {
                      backgroundColor:
                        tab == "Contest" ? "black" : "transparent",
                    },
                  ]}
                ></View>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setTab("Bookmark")}>
            <View style={[styles.tab]}>
              <View style={styles.icons}>
                <MaterialCommunityIcons
                  name={tab == "Bookmark" ? "bookmark" : "bookmark-outline"}
                  color={tab == "Bookmark" ? "black" : "rgba(78, 80, 90, 1)"}
                  size={24}
                  style={styles.verified}
                />
              </View>
              <View style={[styles.bottom]}>
                <View
                  style={[
                    styles.cursor,
                    {
                      backgroundColor:
                        tab == "Bookmark" ? "black" : "transparent",
                    },
                  ]}
                ></View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={[styles.contestParent]}>
          <Text style={[styles.contest]}>
            Leonardesignz has a contest going on
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          decelerationRate={"fast"}
          numColumns={responsiveFlatlist()}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={FlatlistHead}
        />
      </View>
    </View>
  );
};

export default Profile;

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
  headingLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {},
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  profilePicParent: {
    position: "relative",
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  verified: {
    position: "absolute",
    right: 0,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
  username: {
    color: "#353741",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 2,
  },
  bio: {
    color: "#353741",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 25,
  },
  stat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "700",
    fontSize: 14,
  },
  tag: {
    color: "rgba(78, 80, 90, 1)",
    fontWeight: "400",
    fontSize: 14,
    marginLeft: 8,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 43,
  },
  followParent: {
    // backgroundColor: "rgba(53, 55, 65, 1)",
    height: 45,
    width: 110,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  follow: {
    color: "rgba(207, 209, 216, 1)",
    fontWeight: "600",
    fontSize: 16,
  },
  dm: {
    color: "rgba(78, 80, 90, 1)",
    fontWeight: "600",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(78, 80, 90, 1)",
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  gift: {
    borderWidth: 1,
    borderColor: "rgba(78, 80, 90, 1)",
    padding: 9,
    borderRadius: 8,
    marginRight: 10,
  },
  //Tab Section
  tabParent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tab: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    flex: 1,
  },
  icons: {
    height: 32,
    width: 24,
    fontWeight: "600",
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  bottom: {
    height: 3,
    width: "100%",
    backgroundColor: "#CFD1D8",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cursor: {
    height: "100%",
    width: 65,
    backgroundColor: "black",
    borderRadius: 5,
  },
  contestParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contest: {
    color: "rgba(78, 80, 90, 1)",
    fontWeight: "600",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(78, 80, 90, 1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 21,
    marginBottom: 13,
  },
  body: {
    // backgroundColor: "#4E505A",
    // width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
});
