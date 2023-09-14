import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import PostUtilities from "./PostUtilities";
import Comments from "./Comments";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const PostComponent = (props) => {
  const [commentDisplay, setCommentDisplay] = useState(false);
  const [captionDisplay, setCaptionDisplay] = useState(false);

  useEffect(() => {
    if (commentDisplay || captionDisplay) {
      props.setWait(true);
    } else {
      props.setWait(false);
    }
  }, [commentDisplay, captionDisplay]);

  return (
    <View style={styles.container}>
      <Image source={props.ImageBg} style={styles.image} />
      <PostUtilities
        setCommentDisplay={(data) => setCommentDisplay(data)}
        Display={captionDisplay}
        setCaptionDisplay={(data) => setCaptionDisplay(data)}
        Details={props.Details}
      />
      <Comments
        Display={commentDisplay}
        setCommentDisplay={(data) => setCommentDisplay(data)}
      />
    </View>
  );
};

PostComponent.defaultProps = {
  ImageBg: require("../assets/Images/unsplash.png"),
};

const styles = StyleSheet.create({
  container: {
    height: screen.height - 70,
    width: "100%",
    backgroundColor: "#006080",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // borderWidth: 5,
    // borderColor: "yellow",
    // borderStyle: "solid",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default PostComponent;
