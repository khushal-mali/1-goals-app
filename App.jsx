import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function closeAddGoalHandler() {
    setModalIsVisible(false);
  }

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
      <Text style={styles.heading}>🎯 Course Goals</Text>

      <Pressable
        style={{
          backgroundColor: "#b639ffff",
          marginVertical: 8,
          borderRadius: 8,
          shadowColor: "#000",
          overflow: "hidden",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
        }}
        onPress={startAddGoalHandler}
      >
        <Text
          style={{
            padding: 12,
            textAlign: "center",
            color: "#fff",
            fontSize: 16,
            borderRadius: 8,
          }}
        >
          Add New Goal
        </Text>
      </Pressable>

      {/* Input Component */}
      <GoalInput
        addGoalHandler={addGoalHandler}
        showModal={modalIsVisible}
        closeModal={closeAddGoalHandler}
      />

      {/* <ScrollView
        alwaysBounceVertical={false}
        overScrollMode="never"
        fadingEdgeLength={50}
        style={styles.goalsContainer}
      >
        {courseGoals.map((goal, index) => (
          <View style={styles.goalItem} key={index}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* Goals List Component */}
      <FlatList
        alwaysBounceVertical={false}
        overScrollMode="never"
        fadingEdgeLength={50}
        decelerationRate={0.5}
        style={styles.goalsContainer}
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <GoalItem onDeleteItem={deleteGoalHandler} item={itemData.item} />
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
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  goalsContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

/*
## 📌 Advantages of `FlatList`

- **Performance:**  
  `FlatList` renders only what's visible using virtualization, making it highly efficient for large lists.  
  `ScrollView` renders everything at once, leading to performance issues with many items.

- **Scalability:**  
  Handles **thousands of items** without lag or memory issues.

- **Built-in Features:**  
  `FlatList` includes:
  - Infinite scrolling (`onEndReached`)
  - Pull-to-refresh (`refreshing` and `onRefresh`)
  - Header/Footer components
  - Item separators
  - Scroll-to-index or scroll-to-item

---

## 🔴 When to Use `ScrollView`

Use `ScrollView` **only** when:
- The content is **small and not dynamic**
- You don’t need list-specific features
- Example: Forms, static screens, or layouts without repeating items
*/
