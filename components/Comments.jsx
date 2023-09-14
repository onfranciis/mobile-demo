import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import CommentPost from "./CommentPost";

const Cancel = "../assets/Images/icons/cancelBlack.png";
const Search = "../assets/Images/icons/searchBlack.png";

const Comments = (props) => {
  const translation = useRef(new Animated.Value(500)).current;
  const [close, setClose] = useState(false);

  const openComment = () => {
    Animated.spring(translation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeComment = () => {
    Animated.spring(translation, {
      toValue: 700,
      useNativeDriver: true,
    }).start();
  };

  if (props.Display) {
    openComment();
  } else {
    closeComment();
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: translation }],
        },
      ]}
    >
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => props.setCommentDisplay(false)}
        >
          <Feather name="search" color="black" size={24} />
        </TouchableWithoutFeedback>
        <Text style={styles.headerText}>1234 comments</Text>
        <TouchableWithoutFeedback
          onPress={() => props.setCommentDisplay(false)}
        >
          <Feather name="x" color="black" size={24} />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.body}>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          <CommentPost />
          <CommentPost />
          <CommentPost />
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 5,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    position: "absolute",
    paddingHorizontal: 15,
    bottom: -20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 19,
    paddingHorizontal: 15,
  },
  search: {
    height: 24,
    width: 24,
  },
  headerText: {
    color: "#353741",
    fontSize: 14,
    fontWeight: "700",
  },
  body: {
    paddingBottom: 100,
  },
  scrollview: {
    paddingTop: 20,
  },
});
