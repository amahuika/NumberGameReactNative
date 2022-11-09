import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttons}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#a00b56",
    elevation: 8,
  },
  input: {
    height: 40,
    width: 50,
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
    color: "#f9cc38",
    borderBottomColor: "#f9cc38",
    borderBottomWidth: 2,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttons: {
    flex: 1,
  },
});
