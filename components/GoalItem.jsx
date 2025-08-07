import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(item.id)}
        android_ripple={{ color: "#509bfeff" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#398fffff",
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    overflow: "hidden",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 12,
    color: "#fff",
    fontSize: 16,
    borderRadius: 8,
  },
});
