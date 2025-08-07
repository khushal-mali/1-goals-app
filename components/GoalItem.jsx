import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
      <Pressable
        onPress={() => onDeleteItem(item.id)}
        android_ripple={{ color: "#ddd", borderless: true }}
        style={({ pressed }) => [styles.iconContainer, pressed && styles.pressedIcon]}
      >
        <Icon name="trash-can-outline" size={22} color="#fff" />
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7b2cbf",
    borderRadius: 12,
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  goalText: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  iconContainer: {
    marginLeft: 12,
    padding: 6,
    borderRadius: 50,
  },
  pressedIcon: {
    opacity: 0.6,
  },
});
