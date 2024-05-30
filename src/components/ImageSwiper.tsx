import React, { useRef } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useAppContext } from "../context/appContext";

interface ImageItem {
  id: number;
  source: string;
  mood: string;
}

const images: ImageItem[] = [
  { id: 1, source: require("../../assets/images/good.png"), mood: "Good" },
  { id: 2, source: require("../../assets/images/awesome.png"), mood: "Awesom" },
  { id: 3, source: require("../../assets/images/happy.png"), mood: "Happy" },
  { id: 4, source: require("../../assets/images/bad.png"), mood: "Bad" },
  { id: 5, source: require("../../assets/images/awful.png"), mood: "Awful" },
];

const { width: viewportWidth } = Dimensions.get("window");

function ImageSwiper() {
  const { setMood } = useAppContext();
  const swiperRef = useRef<SwiperFlatList>(null);
  const handleChangeIndex = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.scrollToIndex({ index });
      setMood("mood", images[index].mood);
      setMood("source", images[index].source);
    }
  };

  return (
    <View style={styles.SwipperContainer}>
      <SwiperFlatList
        ref={swiperRef}
        index={0}
        showPagination
        paginationStyleItem={styles.paginationItem}
        paginationStyle={styles.pagination}
        paginationActiveColor="#464646"
        paginationDefaultColor="#B4B4B4"
        onChangeIndex={({ index }) => handleChangeIndex(index)}
        data={images}
        renderItem={({ item }) => {
          return (
            <View style={styles.child}>
              <View>
                <Image source={item.source} style={styles.image} />
              </View>
              <Text style={{ fontSize: 18, fontWeight: 700, color: "#464646" }}>
                {item.mood}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SwipperContainer: {
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
