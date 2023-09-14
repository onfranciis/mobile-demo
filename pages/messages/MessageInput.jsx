import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../../Config";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    props.handleSend(message);
    setMessage("");
  };

  const handleSend2 = () => {
    props.handleSend2(message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handleSend2()}>
        <MaterialIcons
          name="emoji-emotions"
          size={24}
          color="#353741"
          style={styles.emoji}
        />
      </TouchableWithoutFeedback>

      <TextInput
        placeholder="Write a Message"
        style={styles.input}
        value={message}
        onChangeText={(e) => setMessage(e)}
        multiline={true}
        selectionColor={Colors.Primary}
      />

      <View style={styles.right}>
        <TouchableWithoutFeedback>
          <Feather name="paperclip" size={20} color="#353741" />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleSend()}>
          <View style={styles.send}>
            <MaterialIcons
              name="send"
              size={20}
              color="white"
              style={{ marginTop: 0, marginRight: -7 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  container: {
    maxHeight: 60,
    width: "100%",
    backgroundColor: "#CFD1D8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingTop: 7,
    paddingBottom: 5,
    flex: 1,
  },
  emoji: {
    marginBottom: 13,
  },
  input: {
    maxHeight: 120,
    height: "100%",
    // backgroundColor: "green",
    flex: 1,
    marginHorizontal: 10,
  },
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  send: {
    height: 50,
    width: 50,
    backgroundColor: "#353741",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    transform: [{ rotateZ: "-50deg" }],
    marginLeft: 15,
    // padding: 16,
  },
});
