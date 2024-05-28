import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottoomTabs from "./src/navigation";
import { AppProvider } from "./src/context/userContext";
import { createStackNavigator } from "@react-navigation/stack";
import LogMood from "./src/screens/logMood/logMood";
import { registerForPushNotificationsAsync } from "./src/utils/notifications";

export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        console.log("Push token:", token);
      }
    });
  }, []);
  const Stack = createStackNavigator();
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottoomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LogMood"
            component={LogMood}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
