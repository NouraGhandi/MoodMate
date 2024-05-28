import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const MoodCard = ({
  day,
  month,
  mood,
  emotion,
  source,
}: {
  day: number;
  month: string;
  mood: string;
  emotion: string;
  source?: any;
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDate}>
        <Text style={styles.cardDateText}>{day}</Text>
        <Text style={styles.cardDateText}>{month}</Text>
      </View>
      <View style={styles.cardDivider}></View>
      <View style={styles.cardContent}>
        <Text style={styles.cardContentText}>{mood}</Text>
        <Text style={styles.cardContentText}>{emotion}</Text>
      </View>
      <View style={styles.cardImageContainer}>
        {/* <Image source={require(`${source}`)} style={styles.image} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //   height: 150,
    //   width: "48%",
    //   backgroundColor: "#FFFFFF",
    //   borderRadius: 20,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   alignContent: "center",
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
export default MoodCard;