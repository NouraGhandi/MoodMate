import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";

// Define an interface for your images
interface ImageItem {
  id: number;
  source: string; // Use 'any' because 'require' returns a number
  mood: string;
}

// Create an array of images using require
const images: ImageItem[] = [
  { id: 1, source: require("../../assets/images/happy.png"), mood: "Happy" },
  {
    id: 2,
    source: require("../../assets/images/awesome.png"),
    mood: "Awesom",
  },
  { id: 3, source: require("../../assets/images/good.png"), mood: "Good" },
  { id: 4, source: require("../../assets/images/bad.png"), mood: "Bad" },
  { id: 5, source: require("../../assets/images/awful.png"), mood: "Awful" },
];

const { width: viewportWidth } = Dimensions.get("window");

function ImageSwiper() {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        index={0}
        showPagination
        paginationStyleItem={styles.paginationItem}
        paginationStyle={styles.pagination}
        paginationActiveColor="#464646"
        paginationDefaultColor="#B4B4B4"
        data={images}
        renderItem={({ item }) => (
          <View style={styles.child}>
            <View>
              <Image source={item.source} style={styles.image} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: 700, color: "#464646" }}>
              {item.mood}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB",
  },
  child: {
    width: viewportWidth,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: viewportWidth - 40,
    height: 200,
    resizeMode: "contain",
  },
  pagination: {
    position: "absolute",
  },
  paginationItem: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default ImageSwiper;
