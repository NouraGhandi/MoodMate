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
import Inspiration from "../../componants/inspirationComponant";
import MusicIcon from "../../icons/musicIcon";
import VideoIcon from "../../icons/videoIcon";
import BookIcon from "../../icons/bookIcon";
import QuoteIcon from "../../icons/quoteIcon";

export default function Home() {
  const data = [
    { icon: <MusicIcon />, id: 1 },
    { icon: <VideoIcon />, id: 2 },
    { icon: <BookIcon />, id: 3 },
    { icon: <QuoteIcon />, id: 4 },
  ];

  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", {
    month: "long",
    calendar: "gregory",
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.headerText}>Inspirations... </Text>
        <View style={styles.inspirationContainer}>
          {data.map((item) => (
            <Inspiration key={item.id} icon={item.icon} />
          ))}
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{month + " "}</Text>
          <Text style={styles.dateText}>{year}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardDate}>
            <Text style={styles.cardDateText}>1</Text>
            <Text style={styles.cardDateText}>May</Text>
          </View>
          <View style={styles.cardDivider}></View>
          <View style={styles.cardContent}>
            <Text style={styles.cardContentText}>AWESOME</Text>
            <Text style={styles.cardContentText}>confidence, Powerful</Text>
          </View>
          <View style={styles.cardImageContainer}>
            <Image
              source={require("../../../assets/images/bad.png")}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Log your mood   +" color="#fff" onPress={() => {}} />
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
    flexGrow: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#464646",
    marginBottom: 20,
  },
  inspirationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  dateContainer: {
    flexDirection: "row",

    marginBottom: 20,
  },
  dateText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#464646",
  },
  card: {
    flexDirection: "row",
    height: 72,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardDate: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  cardDateText: {
    fontSize: 14,
    fontWeight: "700",
  },
  cardDivider: {
    height: 34,
    borderWidth: 1,
    marginRight: 10,
  },
  cardContent: {
    justifyContent: "center",
    width: "50%",
  },
  cardContentText: {
    fontSize: 14,
    fontWeight: "700",
  },
  cardImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
  },
  image: {
    width: 50,
    height: 50,
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
