import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Inspiration from "../screens/inspiration";
import AnalysisIcon from "../icons/analysisIcon";
import HomeIcon from "../icons/homeIcon";
enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
            <AnalysisIcon color={focused ? "#4C9FC1" : "#C6C6C6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
