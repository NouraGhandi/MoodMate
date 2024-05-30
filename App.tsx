import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottoomTabs from "./src/navigation";
import { AppProvider } from "./src/context/appContext";
import { createStackNavigator } from "@react-navigation/stack";
import LogMood from "./src/screens/log-mood";
import PushNotifications from "./src/utils/notifications";

export default function App() {
  PushNotifications();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottoomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LogMood"
            component={LogMood}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}
