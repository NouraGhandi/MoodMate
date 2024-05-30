import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Inspiration from "../screens/inspiration";
import HomeIcon from "../icons/HomeIcon";
import InspirationsIcon from "../icons/InspirationsIcon";
enableScreens();
const Tab = createBottomTabNavigator();

export default function BottoomTabs() {
  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        tabBarActiveTintColor: "#4C9FC1",
        tabBarInactiveTintColor: "#C6C6C6",
        tabBarStyle: {
          height: 80,
          paddingVertical: 5,
          paddingBottom: 10,
          backgroundColor: "#0001",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home"!,
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#4C9FC1" : "#C6C6C6"} />
          ),
        }}
      />

      <Tab.Screen
        name="Inspiration"
        component={Inspiration}
        options={{
          tabBarLabel: "Inspiration"!,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <InspirationsIcon color={focused ? "#4C9FC1" : "#C6C6C6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
