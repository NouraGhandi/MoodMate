import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../context/userContext";
import MoodCard from "../../componants/moodCou";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
export default function Home() {
  const { userMood } = useAppContext();
  const { navigate } = useNavigation();
  useEffect(() => {
    navigate("LogMood" as never);
  }, [userMood.mood == ""]);
  const date = dayjs(new Date()).format("MMM YYYY");
  const moodLogDay = dayjs(userMood.date).format("DD");
  const moodLogMonth = dayjs(userMood.date).format("MMM");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  function getRandomHexColor() {
    return Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  }
  const fetchColor = async () => {
    const randomHexColor = getRandomHexColor();
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${randomHexColor}`
      );
      const data = await response.json();
      setBackgroundColor(data.hex.value);
    } catch (error) {
      console.error("Error fetching color:", error);
    }
  };
  useEffect(() => {
    fetchColor();
  }, [userMood.mood]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <ScrollView style={{ padding: 20, backgroundColor }}>
        <MoodCard
          day={moodLogDay}
          month={moodLogMonth}
          mood={userMood.mood}
          emotion={userMood.emotion}
          source={userMood.source}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Log your mood   +"
          color="#fff"
          onPress={() => navigate("LogMood" as never)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  dateContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  dateText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#464646",
    marginTop: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 196,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#4C9FC1",
  },
});
