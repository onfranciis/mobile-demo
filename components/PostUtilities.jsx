import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../Config";

const handleNumbers = (data) => {
  // let value = data + "";
  // let len = value.length;
  // let sym = len > 6 ? "m" : "k";
  // let hundred = len == 9 || len == 6;
  // if (len > 3) {
  //   value = value.slice(0, -3) + (hundred ? "" : "." + value.charAt(1)) + sym;
  // }
  // console.log(value);

  return `${data}k`;
};

const PostUtilities = (props) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [follow, setFollow] = useState(false);
  // const [captionLength, setcaptionLength] = useState(false);
  const captionDisplay = props.Display;
  const Details = props.Details;

  return (
    <View style={styles.container}>
      <View style={styles.actionsParent}>
        <View style={styles.detailsParent}>
          <View style={styles.details}>
            <View style={styles.profile}>
              <Image
                source={require("../assets/Images/dude.png")}
                style={styles.profilePic}
              />
              <Text style={styles.profileName}>{Details?.Name}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => setFollow(!follow)}>
              <View
                style={[
                  styles.followParent,
                  {
                    backgroundColor: follow ? "white" : "transparent",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.follow,
                    {
                      color: follow ? Colors.Primary : "white",
                    },
                  ]}
                >
                  {follow ? "Following" : "Follow"}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.captionParent}>
            <ScrollView>
              <TouchableWithoutFeedback
                onPress={() => props.setCaptionDisplay(!captionDisplay)}
              >
                <Text
                  style={styles.caption}
                  ellipsizeMode="tail"
                  numberOfLines={captionDisplay ? 0 : 2}
                >
                  {Details?.Caption}
                </Text>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableWithoutFeedback
            onPress={() => {
              setLike(!like);
              if (like) {
                Details.Like -= 1;
              } else {
                Details.Like += 1;
              }
            }}
          >
            <View style={styles.imageAndCount}>
              {like ? (
                <AntDesign name="like1" color="white" size={30} />
              ) : (
                <AntDesign name="like2" color="white" size={30} />
              )}
              <Text style={styles.count}>
                {Details?.Like > 1000
                  ? handleNumbers(Details?.Like)
                  : Details?.Like}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => props.setCommentDisplay(true)}
          >
            <View style={styles.imageAndCount}>
              <FontAwesome name="comment-o" color="white" size={30} />
              <Text style={styles.count}>{Details?.Comment}</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setSave(!save)}>
            <View style={styles.imageAndCount}>
              {save ? (
                <Ionicons name="bookmark" color="white" size={30} />
              ) : (
                <Ionicons name="bookmark-outline" color="white" size={30} />
              )}
              <Text style={styles.count}>{Details?.Save}</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.imageAndCount}>
            <FontAwesome name="send" color="white" size={25} />
          </View>

          <View style={styles.imageAndCount}>
            <MaterialIcons name="more-horiz" color="white" size={36} />
          </View>
        </View>
      </View>
    </View>
  );
};

PostUtilities.defaultProps = {
  Details: {
    // Pic: require("../../assets/Images/portrait/PortraitSquare1.jpg"),
    Status: false,
    Like: 0,
    Comment: 0,
    Save: 0,
  },
};

export default PostUtilities;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  actionsParent: {
    width: "100%",
    // backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingLeft: 15,
  },
  actions: {
    maxWidth: 60,
    // backgroundColor: "gray",
    flex: 1,
    paddingBottom: 56,
  },
  imageAndCount: {
    alignItems: "center",
    padding: 5,
    marginVertical: 12,
  },
  image: {
    height: 32,
    width: 32,
  },
  count: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  detailsParent: {
    flex: 1,
  },
  details: {
    width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 21,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    height: 34,
    width: 34,
    borderRadius: 50,
    marginRight: 13,
  },
  profileName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  followParent: {
    minWidth: 100,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    // paddingHorizontal: 32,
    marginLeft: 22,
  },
  follow: {
    fontSize: 14,
    fontWeight: "600",
  },
  captionParent: {
    maxHeight: 380,
    // height: "10%",
    width: "100%",
    padding: 0,
    paddingBottom: 25,
    // zIndex: 1,
  },
  caption: {
    // backgroundColor: "red",
    width: "100%",
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    textShadowColor: "black",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});
