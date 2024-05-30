import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const InspirationCard = ({
  icon,
  onPress,
}: {
  icon: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
export default InspirationCard;
