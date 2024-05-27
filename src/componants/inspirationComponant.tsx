import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MusicIcon from "../icons/musicIcon";
const Inspiration = ({
  icon,
  onPress,
}: {
  icon: React.ReactNode;
  onPress?: React.ReactNode;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress}>
      {icon}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
export default Inspiration;
