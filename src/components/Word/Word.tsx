import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

// components
import TooltipBox from "../TooltipBox";

interface WordProps {
  word: string;
  tooltip: string;
}

const Word: React.FC<WordProps> = ({ word, tooltip }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (tooltipVisible) {
      timer = setTimeout(() => {
        setTooltipVisible(false);
      }, 1000); // hide after 1 second
    }

    // Clean up the timer if it's still running when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, [tooltipVisible]);

  return (
    <Pressable
      style={{ position: "relative" }}
      onPressIn={() => setTooltipVisible(true)}
    >
      <Text style={{ color: "white", fontSize: 23 }}>{word}</Text>
      {tooltipVisible && <TooltipBox text={tooltip} />}
    </Pressable>
  );
};

export default Word;
