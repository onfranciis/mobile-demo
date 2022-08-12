// import { StatusBar } from "expo-status-bar";
import { SafeAreaViewComponent, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";

import FirstPage from "./pages/onboarding/FirstPage";
import SecondPage from "./pages/onboarding/SecondPage";
import ThirdPage from "./pages/onboarding/ThirdPage";
import Routes from "./screens/Routes";

export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
