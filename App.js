import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ValidationTextInput from "./ValidationTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <ValidationTextInput
        placeholder="Email"
        regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        validationMessage="Please enter a valid email"
      />
      <ValidationTextInput
        placeholder="Phone"
        regex={/^\d{3}-\d{3}-\d{4}$/}
        validationMessage="Please enter a valid phone number of the form xxx-xxx-xxxx"
      />
      <StatusBar style="auto" />
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
});
