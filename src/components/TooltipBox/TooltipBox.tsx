import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Theme
import theme from "../../themes/theme";

interface TooltipBoxProps {
  text: string;
  x?: number;
  y?: number;
}

const TooltipBox: React.FC<TooltipBoxProps> = ({ text, x, y }) => {
  const computedStyles = {
    left: -20,
    top: -40,
  };

  return (
    <View style={[styles.tooltipContainer, computedStyles]}>
      <Text style={styles.tooltipText}>{text}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  tooltipContainer: {
    position: "absolute",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5, // for android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 80,
  },
  tooltipText: {
    color: theme.colors.buttonText,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TooltipBox;
