import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton(props) {
  function pressHandler() {
    console.log("press");
  }

  return (
    <View style={styles.containerOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.containerInner, styles.pressed]
            : styles.containerInner
        }
        onPress={pressHandler}
        android_ripple={{ color: "#bb3237" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  containerOuter: {
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
    backgroundColor: "#eb4296",
    elevation: 8,
  },
  containerInner: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
