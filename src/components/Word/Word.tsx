import { useState } from "react";
import { Pressable, Text } from "react-native";

// components
import TooltipBox from "../TooltipBox";

interface WordProps {
  word: string;
}

const Word: React.FC<WordProps> = ({ word }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Pressable
      style={{ position: "relative" }}
      onPressIn={() => setTooltipVisible(true)}
      onPressOut={() => setTooltipVisible(false)}
    >
      <Text style={{ color: "white", fontSize: 23 }}>{word}</Text>
      {tooltipVisible && <TooltipBox text="Tooltip" />}
    </Pressable>
  );
};

export default Word;
