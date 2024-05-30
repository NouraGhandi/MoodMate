import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import ImageSwiper from "../../components/ImageSwiper";
import { useAppContext } from "../../context/appContext";

export default function LogMood() {
  const { setMood, mood, reset, submitToList } = useAppContext();
  useEffect(() => {
    reset();
  }, []);
  const feelings: string[] = [
    "Happy",
    "Tired",
    "Bored",
    "Sad",
    "Relaxed",
    "Anxious",
    "Unsure",
  ];

  const handlefeelingPress = (feeling: string) => {
    setMood("feeling", feeling);
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
            {feelings.map((feeling, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlefeelingPress(feeling)}
                style={[
                  styles.feelingButton,
                  mood.feeling === feeling && styles.selectedfeelingButton,
                ]}
              >
                <Text style={styles.feelingText}>{feeling}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "column" }}></View>

        <View style={styles.buttonContainer}>
          <Button title="Save" color="#fff" onPress={submitToList} />
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
  feelingButton: {
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
  selectedfeelingButton: {
    backgroundColor: "#4C9FC1",
  },
  feelingText: {
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
