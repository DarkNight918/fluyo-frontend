import { StyleSheet, SafeAreaView } from "react-native";

// Screens
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7fdbfd",
    justifyContent: "flex-end",
  },
});
