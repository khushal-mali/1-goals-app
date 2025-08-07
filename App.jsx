import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => setModalIsVisible(true);
  const closeAddGoalHandler = () => setModalIsVisible(false);

  function addGoalHandler(text) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f8" />
      <Text style={styles.heading}>🎯 My Course Goals</Text>

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] },
        ]}
        onPress={startAddGoalHandler}
      >
        <Text style={styles.addButtonText}>➕ Add New Goal</Text>
      </Pressable>

      <GoalInput
        addGoalHandler={addGoalHandler}
        showModal={modalIsVisible}
        closeModal={closeAddGoalHandler}
      />

      <FlatList
        alwaysBounceVertical={false}
        overScrollMode="never"
        fadingEdgeLength={50}
        style={styles.goalsContainer}
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#f0f4f8",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#7b2cbf",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  goalsContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
