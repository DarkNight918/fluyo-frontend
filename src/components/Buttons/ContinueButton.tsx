import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import theme from "../../themes/theme";

interface ContinueButtonProps {
  answer: string;
  onPress?: () => void;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ answer, onPress }) => {
  const isAnswered = answer !== "";
  // check the background color
  const backgroundColor = isAnswered
    ? theme.colors.checkBtn
    : theme.colors.continueBtn;

  return (
    <TouchableOpacity
      disabled={!isAnswered}
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
    >
      <Text style={styles.buttonText}>
        {isAnswered ? "Check Answer" : "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    width: "90%",
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android elevation
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default ContinueButton;
