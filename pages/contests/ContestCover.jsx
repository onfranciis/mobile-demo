import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { Colors } from "../../Config";
import SponsorContestButton from "./SponsorContestButton";
import ContestPostPreview from "./ContestPostPreview";

const DATA = [
  {
    id: "1",
    link: require("../../assets/Images/BackgroundImage2.jpg"),
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
    link: require("../../assets/Images/BackgroundImage2.jpg"),
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

const Heading = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.heading}>
        <View style={styles.headingUtilites}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.Black}
              size={27}
            />
          </TouchableWithoutFeedback>
          <View style={styles.headingMore}>
            <Feather name="share-2" color={Colors.Black} size={27} />
            <MaterialIcons
              name="more-vert"
              color={Colors.Black}
              size={27}
              style={{ marginLeft: 20 }}
            />
          </View>
        </View>
        <Text style={styles.headingTitle}>Contest Cover</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Designing a Web3 Landing page</Text>
        <Text style={styles.detailsCaption}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias
          perspiciatis ipsam suscipit alias perferendis eos nostrum accusamus
          quos culpa eligendi molestiae quod temporibus, nemo omnis ab
          reiciendis?
        </Text>
      </View>

      <View style={styles.miniDetails}>
        <View style={styles.host}>
          <Image
            source={require("../../assets/Images/portrait/PortraitSquare1.jpg")}
            style={styles.hostPic}
          />
          <Text style={styles.hostName}>Daniella Obi</Text>
          <Text style={styles.hostUsername}>@stargirl</Text>
          <Text style={styles.hostStatus}>Host</Text>
        </View>

        <View style={styles.stampDetails}>
          <View style={styles.stamp}>
            <Text style={styles.time}>02-04-2022</Text>
            <Text style={styles.tag}>End Date</Text>
          </View>

          <View style={styles.stamp}>
            <Text style={styles.time}>02-04-2022</Text>
            <Text style={styles.tag}>End Date</Text>
          </View>
        </View>

        <View style={styles.numberDetails}>
          <View style={styles.stamp}>
            <Text style={styles.time}>123</Text>
            <Text style={styles.tag}>Participants</Text>
          </View>

          <View style={styles.stamp}>
            <Text style={styles.ranked}>02-04-2022</Text>
            <Text style={styles.time}>Highest Likes</Text>
          </View>
        </View>

        <View style={styles.sponsor}>
          <SponsorContestButton />
        </View>
      </View>
    </View>
  );
};

const ContestCover = ({ navigation }) => {
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
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          key={responsiveFlatlist()}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Heading />}
          horizontal={false}
          decelerationRate={"fast"}
          numColumns={responsiveFlatlist()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.float}>
        <MaterialIcons name="add" color={Colors.White} size={24} />
        <Text style={styles.floatText}>Participate in this contest</Text>
      </View>
    </View>
  );
};

export default ContestCover;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  heading: {
    backgroundColor: "#d9d9d9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 5,
    paddingHorizontal: 20,
  },
  headingUtilites: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingMore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 23,
  },
  details: {
    alignItems: "center",
    paddingHorizontal: 25,
  },
  detailsTitle: {
    color: "black",
    fontWeight: "700",
    fontSize: 18,
    marginVertical: 8,
  },
  detailsCaption: {
    color: "#7E8191",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
  miniDetails: {
    paddingHorizontal: 25,
  },
  host: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 11,
  },
  hostPic: {
    height: 24,
    width: 24,
    borderRadius: 24,
    marginRight: 5,
  },
  hostName: {
    color: "#353741",
    fontWeight: "600",
    fontSize: 14,
    marginRight: 3,
  },
  hostUsername: {
    color: "#7E8191",
    fontWeight: "600",
    fontSize: 14,
    marginRight: 8,
  },
  hostStatus: {
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "black",
    fontWeight: "400",
    fontSize: 12,
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  stampDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  stamp: {
    display: "flex",
    flexDirection: "row",
  },
  time: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
  },
  tag: {
    color: "#4E505A",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 7,
    marginRight: 16,
  },
  numberDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  ranked: {
    color: "#4E505A",
    fontWeight: "600",
    fontSize: 14,
    marginRight: 7,
  },
  sponsor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 19,
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
  float: {
    maxWidth: 220,
    backgroundColor: Colors.Primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
    position: "absolute",
    bottom: 27,
    right: 27,
  },
  floatText: {
    // display: "none",
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
  },
});
