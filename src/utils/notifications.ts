import React, { useEffect, useState, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function PushNotifications() {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    // schedulePushNotification();
    scheduleDailyNotifications();
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
}

async function scheduleDailyNotifications() {
  const morningTrigger = {
    hour: 10,
    minute: 0,
    repeats: true,
  };

  const eveningTrigger = {
    hour: 20,
    minute: 0,
    repeats: true,
  };

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Good Morning!",
      body: "Log your Mood",
      data: { data: "morning" },
    },
    trigger: morningTrigger,
  });

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Good Evening!",
      body: "Log your Mood",
      data: { data: "evening" },
    },
    trigger: eveningTrigger,
  });
}
async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
    await Notifications.requestPermissionsAsync();
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  }
  return token;
}
