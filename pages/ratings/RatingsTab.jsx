import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

const RatingsTab = (props) => {
  const [tab, setTab] = useState("Likes");

  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setTab("Likes");
            props.setTab(false);
          }}
        >
          <View style={styles.tab}>
            <Text style={styles.name}>Highest Likes</Text>
            <View style={styles.bottom}>
              <View
                style={[
                  styles.cursor,
                  { backgroundColor: tab == "Likes" ? "black" : "transparent" },
                ]}
              ></View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setTab("Followers");
            props.setTab(true);
          }}
        >
          <View style={styles.tab}>
            <Text style={styles.name}>Highest Followers</Text>
            <View style={styles.bottom}>
              <View
                style={[
                  styles.cursor,
                  {
                    backgroundColor:
                      tab == "Followers" ? "black" : "transparent",
                  },
                ]}
              ></View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setTab("Views");
            props.setTab(false);
          }}
        >
          <View style={styles.tab}>
            <Text style={styles.name}>Highest Views</Text>
            <View style={styles.bottom}>
              <View
                style={[
                  styles.cursor,
                  { backgroundColor: tab == "Views" ? "black" : "transparent" },
                ]}
              ></View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            setTab("Gifters");
            props.setTab(true);
          }}
        >
          <View style={styles.tab}>
            <Text style={styles.name}>Highest Gifters</Text>
            <View style={styles.bottom}>
              <View
                style={[
                  styles.cursor,
                  {
                    backgroundColor: tab == "Gifters" ? "black" : "transparent",
                  },
                ]}
              ></View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default RatingsTab;

const styles = StyleSheet.create({
  container: {
    // height: 50,
    width: "100%",
  },
  tab: {
    // width: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    flex: 1,
  },
  name: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
    paddingHorizontal: 8,
    paddingBottom: 5,
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
});
