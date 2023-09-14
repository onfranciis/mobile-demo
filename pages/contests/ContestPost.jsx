import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../Config";

const ContestPost = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ContestCover")}
    >
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.ongoing}>Ongoing</Text>
          <MaterialIcons
            name="more-horiz"
            color={Colors.DarkText[2]}
            size={36}
          />
        </View>
        <View style={styles.titleParent}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
            Design an onboarding page for a crypto wallet, while having a space
            theme
          </Text>

          <Image
            source={require("../../assets/Images/portrait/PortraitSquare1.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.participants}>
          <View style={styles.participantsPics}>
            <Image
              source={require("../../assets/Images/portrait/PortraitSquare1.jpg")}
              style={styles.participantsPic}
            />
            <Image
              source={require("../../assets/Images/portrait/PortraitSquare2.jpg")}
              style={styles.participantsPic}
            />
            <Image
              source={require("../../assets/Images/portrait/PortraitSquare3.jpg")}
              style={styles.participantsPic}
            />
            <Image
              source={require("../../assets/Images/portrait/PortraitSquare4.jpg")}
              style={styles.participantsPic}
            />
            <Image
              source={require("../../assets/Images/portrait/PortraitSquare5.jpg")}
              style={styles.participantsPic}
            />
          </View>
          <Text style={styles.participantsNumber}>
            +23 people contesting right now
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerTop}>
            <View style={styles.hostPicParent}>
              <Image
                source={require("../../assets/Images/portrait/PortraitSquare1.jpg")}
                style={styles.hostPic}
              />
            </View>
            <Text style={styles.hostName}>Leonard Ogbu</Text>
            <Text style={styles.hostStatus}>Host</Text>
          </View>
          <Text style={styles.hostBio} ellipsizeMode="tail" numberOfLines={1}>
            Content creator | Avid businessman | Lover of Kids | Web3
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContestPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4E505A",
    borderRadius: 24,
    overflow: "hidden",
    marginVertical: 24,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  ongoing: {
    color: Colors.White,
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 16,
  },
  titleParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.White,
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 26,
    flex: 1,
    marginBottom: 16,
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 50,
    marginLeft: 36,
  },
  participants: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 21,
  },
  participantsPics: {
    display: "flex",
    flexDirection: "row",
  },
  participantsPic: {
    height: 24,
    width: 24,
    borderRadius: 50,
    marginRight: -5,
  },
  participantsNumber: {
    color: "rgba(225, 255, 255, 0.6)",
    fontWeight: "600",
    fontSize: 12,
    marginLeft: 13,
  },
  footer: {
    height: 86,
    backgroundColor: "#36383F",
    paddingHorizontal: 20,
    paddingTop: 11,
    paddingBottom: 19,
  },
  footerTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginBottom: 8,
  },
  hostPicParent: {},
  hostPic: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 8,
  },
  hostName: {
    color: Colors.White,
    fontWeight: "600",
    fontSize: 14,
    marginRight: 10,
  },
  hostStatus: {
    backgroundColor: "rgba(225, 255, 255, 0.1)",
    color: Colors.White,
    fontWeight: "400",
    fontSize: 12,
    borderRadius: 3,
    padding: 4,
  },
  hostBio: {
    color: Colors.DarkText[2],
    fontWeight: "600",
    fontSize: 12,
  },
});
