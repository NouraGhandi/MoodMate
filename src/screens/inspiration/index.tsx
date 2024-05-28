import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import VideoIcon from "../../icons/videoIcon";
import QuoteIcon from "../../icons/quoteIcon";
import MusicIcon from "../../icons/musicIcon";
import BookIcon from "../../icons/bookIcon";
import InspirationCard from "../../componants/inspirationComponant";
import { useAppContext } from "../../context/userContext";

export default function Inspiration() {
  const { userMood } = useAppContext();
  const [backgroundColor, setBackgroundColor] = useState<string>("ffffff");
  function getRandomHexColor() {
    return Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  }
  const fetchColor = async () => {
    const randomHexColor = getRandomHexColor();
    try {
      // Fetch a random color from TheColorAPI
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
    fetchColor(); // Fetch initial color on mount
  }, [userMood.mood]);
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.headerText}>Inspirations... </Text>
        <View style={styles.inspirationContainer}>
          <InspirationCard
            icon={<MusicIcon />}
            onPress={() => Alert.alert("Listen", "Unstoppable - Sia")}
          />
          <InspirationCard
            icon={<VideoIcon />}
            onPress={() =>
              Alert.alert("Watch", "Change the way you think - Muniba Mazari")
            }
          />
        </View>
        <View style={styles.inspirationContainer}>
          <InspirationCard
            icon={<BookIcon />}
            onPress={() =>
              Alert.alert("Read", "Big Magic by Elizabeth Gilbert")
            }
          />
          <InspirationCard
            icon={<QuoteIcon />}
            onPress={() =>
              Alert.alert(
                "Quote",
                "Be thankful for closed doors, bad vibes, and stuff that falls apart. It’ll protect you from things not meant for you"
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 35,
    color: "#464646",
  },

  inspirationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
});
