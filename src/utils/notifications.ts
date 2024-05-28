// src/notifications.ts
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Alert } from "react-native";

export async function registerForPushNotificationsAsync(): Promise<
  string | undefined
> {
  if (!Constants.isDevice) {
    Alert.alert(
      "Device Required",
      "Must use physical device for Push Notifications"
    );
    return undefined;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    Alert.alert(
      "Permission Required",
      "Failed to get push token for push notification!"
    );
    return undefined;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);
  return token;
}
