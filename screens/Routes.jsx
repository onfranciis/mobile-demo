import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Splash from "../pages/onboarding/Splash";
import FirstPage from "../pages/onboarding/FirstPage";
import SecondPage from "../pages/onboarding/SecondPage";
import ThirdPage from "../pages/onboarding/ThirdPage";

import SignUpFirst from "../pages/signUp/SignUpFirst";
import PhoneNumberOREmail from "../pages/signUp/PhoneNumberOREmail";
import SignUpFourth from "../pages/signUp/SignUpFourth";
import SignUpFifth from "../pages/signUp/SignUpFifth";

import Home from "../pages/home/Home";
import MainContainer from "./MainContainer";
import NewContest from "../pages/contests/NewContest";
import NewContest2 from "../pages/contests/NewContest2";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen name="Third" component={ThirdPage} />
        <Stack.Screen name="SignUpFirst" component={SignUpFirst} />
        <Stack.Screen
          name="PhoneNumberOREmail"
          component={PhoneNumberOREmail}
        />
        <Stack.Screen name="SignUpFourth" component={SignUpFourth} />
        <Stack.Screen name="SignUpFifth" component={SignUpFifth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={MainContainer} />
        <Stack.Screen name="NewContest" component={NewContest} />
        <Stack.Screen name="NewContest2" component={NewContest2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
