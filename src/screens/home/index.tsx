import React, { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppContext } from "../../context/appContext";
import MoodCard from "../../components/MoodCard";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Home() {
  const { mood, moodList } = useAppContext();
  const { navigate } = useNavigation();

  useEffect(() => {
    if (mood.feeling === "") {
      navigate("LogMood" as never);
    }
  }, []);
  useEffect(() => {
    fetchColor();
  }, [mood.mood]);
  const date = dayjs(new Date()).format("MMM YYYY");

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
  const sortedMoodList = moodList
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .reverse();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <ScrollView style={{ padding: 20, backgroundColor }}>
        {sortedMoodList.map((mood, index) => {
          const day = dayjs(mood.date).format("DD");
          const month = dayjs(mood.date).format("MMM");

          return (
            <MoodCard
              key={index}
              day={day}
              month={month}
              mood={mood.mood}
              feeling={mood.feeling}
              source={mood.source}
            />
          );
        })}
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
