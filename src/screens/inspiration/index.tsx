import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import ImageSwiper from "../../componants/sliderComponant";
import VideoIcon from "../../icons/videoIcon";
import QuoteIcon from "../../icons/quoteIcon";
import MusicIcon from "../../icons/musicIcon";
import BookIcon from "../../icons/bookIcon";
import InspirationCard from "../../componants/inspirationComponant";

export default function Inspiration() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.headerText}>Inspirations... </Text>
        <View style={styles.inspirationContainer}>
          <InspirationCard icon={<MusicIcon />} />
          <InspirationCard icon={<VideoIcon />} />
        </View>
        <View style={styles.inspirationContainer}>
          <InspirationCard icon={<BookIcon />} />
          <InspirationCard icon={<QuoteIcon />} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
  },
  content: {
    flex: 1,
    // width: "100%",
    padding: 20,
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 35,
    color: "#464646",
  },

  // buttonContainer: {
  //   position: "absolute",
  //   bottom: 20,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   width: "auto",
  //   height: "auto",
  //   borderRadius: 20,
  //   backgroundColor: "#4C9FC1",
  // },

  inspirationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
});
