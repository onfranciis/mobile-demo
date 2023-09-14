import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import CommentReply from "./CommentReply";

const LikeFilled = "../assets/Images/icons/likeFilledBlack.png";
const likeTransparent = "../assets/Images/icons/likeTransparentBlack.png";
const ProfilePic = "../assets/Images/portrait/PortraitSquare3.jpg";

const CommentPost = () => {
  const [like, setLike] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.profilePicParent}>
          <Image style={styles.profilePic} source={require(ProfilePic)} />
        </View>
        <View style={styles.main}>
          <Text style={styles.username}>Elah_jah</Text>
          <Text style={styles.post}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            velit qui vero aliquid? Praesentium excepturi cum tempore minima,
            eaque distinctio!
          </Text>
          <View style={styles.footer}>
            <Text style={styles.date}>03-02-2022</Text>
            <Text style={styles.reply}>Reply</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => setLike(!like)}>
          <View style={styles.like}>
            {like ? (
              <AntDesign name="like1" color="#4E505A" size={30} />
            ) : (
              <AntDesign name="like2" color="#4E505A" size={30} />
            )}
            <Text style={styles.likeCount}>334</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <CommentReply />
    </>
  );
};

export default CommentPost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 20,
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicParent: {
    alignSelf: "flex-start",
    paddingRight: 8,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  main: {
    flex: 1,
    width: "100%",
    marginBottom: 4,
  },
  username: {
    color: "#7e8191",
    fontWeight: "600",
    fontSize: 12,
    marginBottom: 4,
  },
  post: {
    color: "#191A1F",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  date: {
    color: "#7e8191",
    fontSize: 12,
    fontWeight: "400",
  },
  reply: {
    color: "#191A1F",
    fontSize: 12,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  like: {
    marginLeft: 21,
  },
  likeImage: {},
  likeCount: {
    color: "#7e8191",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 4,
  },
});
