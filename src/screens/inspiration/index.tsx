import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import VideoIcon from "../../icons/VideoIcon";
import QuoteIcon from "../../icons/QuoteIcon";
import MusicIcon from "../../icons/MusicIcon";
import BookIcon from "../../icons/BookIcon";
import InspirationCard from "../../components/InspirationCard";

export default function Inspiration() {
  return (
    <SafeAreaView style={styles.container}>
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
