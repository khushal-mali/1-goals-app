import { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ addGoalHandler, showModal, closeModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleAddGoal = () => {
    if (!enteredGoalText.trim()) return;
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputContainer}
        >
          <Text style={styles.title}>Add a New Goal</Text>

          <TextInput
            style={styles.textInput}
            placeholder="What's your goal?"
            value={enteredGoalText}
            onChangeText={(text) => setEnteredGoalText(text)}
            placeholderTextColor="#aaa"
          />

          <View style={styles.buttonRow}>
            <Pressable style={[styles.button, styles.addBtn]} onPress={handleAddGoal}>
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.cancelBtn]} onPress={closeModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#f4f4f4",
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "#4e9cff",
  },
  cancelBtn: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
