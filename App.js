import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.khushal}>Khushal mali here! 👋</Text>
      <Text
        style={{
          color: "#ef5592",
          fontSize: 30,
          fontWeight: 700,
          textDecorationLine: "underline",
          paddingHorizontal: 16,
          borderColor: "#ef5592",
          margin: 10,
          borderWidth: 1,
        }}
      >
        Zendria here! 💖
      </Text>

      <Button title="Klick me." color={"#212121"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  khushal: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 700,
    textDecorationLine: "underline",
  },
});
