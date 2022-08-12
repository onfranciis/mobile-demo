import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import FirstPage from "../pages/onboarding/FirstPage";
import SecondPage from "../pages/onboarding/SecondPage";
import Splash from "../pages/onboarding/Splash";
import ThirdPage from "../pages/onboarding/ThirdPage";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="First"
          component={FirstPage}
          options={{ title: "green" }}
        />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen name="Third" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
