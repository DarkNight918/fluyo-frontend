import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

// theme
import theme from "../../themes/theme";

interface WordButtonProps {
  index: number;
  title: string;
  isDisabled: boolean;
  onPress?: (title: string) => void;
}

const WordButton: React.FC<WordButtonProps> = ({
  index,
  title,
  isDisabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => onPress && onPress(title)}
      style={[
        styles.button,
        isDisabled && styles.disabledButton,
        index % 2 === 0 ? styles.leftbutton : styles.rightbutton,
      ]}
    >
      <Text style={[styles.buttonText, isDisabled && styles.hiddenText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 25,
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
  leftbutton: {
    alignSelf: "flex-end",
  },
  rightbutton: {
    alignSelf: "flex-start",
  },
  buttonText: {
    color: theme.colors.buttonText,
    fontSize: 18,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.3,
  },
  hiddenText: {
    opacity: 0,
  },
});

export default WordButton;
