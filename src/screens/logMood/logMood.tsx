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
import { useAppContext } from "../../context/userContext";

export default function LogMood() {
  const emotions: string[] = [
    "Happy",
    "Tired",
    "Bored",
    "Sad",
    "Relaxed",
    "Anxious",
    "Unsure",
  ];

  const { setUserMood, userMood } = useAppContext();
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const handleEmotionPress = (emotion: string) => {
    setSelectedEmotion(emotion);
    setUserMood("emotion", emotion);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.headerText}>How are you?</Text>
        <View style={{ height: "50%" }}>
          <ImageSwiper />
        </View>
        <View style={styles.feelingContainer}>
          <Text style={styles.subHeaderText}>Specify your feeling</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
          >
            {emotions.map((emotion, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleEmotionPress(emotion)}
                style={[
                  styles.emotionButton,
                  selectedEmotion === emotion && styles.selectedEmotionButton,
                ]}
              >
                <Text style={styles.emotionText}>{emotion}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "column" }}></View>
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color="#fff"
            onPress={() => {
              console.log("final", userMood);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F9FB",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 35,
    color: "#464646",
  },
  feelingContainer: {
    paddingHorizontal: 20,
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 35,
    color: "#464646",
  },
  scrollViewContent: {
    justifyContent: "space-evenly",
    width: "auto",
    marginTop: 20,
  },
  emotionButton: {
    width: 80,
    height: 31,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#B4B4B4",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedEmotionButton: {
    backgroundColor: "#4C9FC1",
  },
  emotionText: {
    color: "#000",
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
