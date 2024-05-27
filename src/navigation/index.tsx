// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// type RootTabParamList = {
//   Home: undefined;
//   Settings: undefined;
// };

// const Tab = createBottomTabNavigator<RootTabParamList>();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: string;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'settings' : 'settings-outline';
//           }

//           // You can return any component that you like here!
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Analysis from "../screens/analysis";
import AnalysisIcon from "../icons/analysisIcon";
import HomeIcon from "../icons/homeIcon";
enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabScreen() {
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
        name="Analysis"
        component={Analysis}
        options={{
          tabBarLabel: "Analysis"!,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AnalysisIcon color={focused ? "#4C9FC1" : "#C6C6C6"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
