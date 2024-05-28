import { NavigationContainer } from "@react-navigation/native";
import BottoomTabs from "./src/navigation";
import { AppProvider } from "./src/context/userContext";
import { createStackNavigator } from "@react-navigation/stack";
import LogMood from "./src/screens/logMood/logMood";

export default function App() {
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
