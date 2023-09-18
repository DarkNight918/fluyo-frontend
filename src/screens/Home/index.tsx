import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

// Styles
import styles from "./styles";

// Functions
import { getQNA } from "../../functions/qna.functions";

// Components
import { WordButton, ContinueButton } from "../../components/Buttons";
import Word from "../../components/Word";

// Types
import { QNADataType } from "../../types";

const Home: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [qnaIndex, setQNAIndex] = useState<number>(0);

  const [qnaData, setQNAData] = useState<QNADataType>();

  const [tooltip, setTooltip] = useState<{
    isVisible: boolean;
    text: string;
    x: number;
    y: number;
  }>({
    isVisible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const wordButtons = ["folgen", "Schaf", "Bereiden", "Hause"];

  // show the question text
  const renderQuestion = (text: string, answer: string) => {
    // Split the text into parts
    const parts = text.split(answer);

    return (
      <Text style={styles.header}>
        {parts[0]}
        <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
          {answer}
        </Text>
        {parts[1]}
      </Text>
    );
  };

  // show the answer text
  const renderAnswer = (text: string, answer: string) => {
    const words = text.split(" ");

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          gap: 5,
        }}
      >
        {words.map((word, index) => {
          // if word is same as answer, and if answer is selected already, show with WordButton
          if (word === answer && selectedAnswer) {
            return (
              <WordButton
                key={index}
                index={index}
                title={selectedAnswer}
                isDisabled={false}
              />
            );
          } // if it is same as answer and answer is not selected, just show underscore with blank
          else if (word === answer) {
            return (
              <View
                key={index}
                style={{
                  borderBottomWidth: 1,
                  width: 100,
                  height: "100%",
                  borderColor: "white",
                  alignSelf: "flex-end",
                }}
              />
            );
          } // if nothing, show the words
          else {
            return <Word key={index} word={word} />;
          }
        })}
      </View>
    );
  };

  // set the answer
  const handleButtonPress = (title: string) => {
    setSelectedAnswer(title);
  };

  useEffect(() => {
    // get question and answer data
    const getData = async () => {
      let data = await getQNA(qnaIndex);
      setQNAData(data);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.component}>
        <Text style={styles.subHeader}>Fill in the missing word</Text>
        <Text style={styles.header}>
          {qnaData &&
            renderQuestion(qnaData.english.text, qnaData.english.answer)}
        </Text>
        <Text style={styles.answerContainer}>
          {qnaData && renderAnswer(qnaData.german.text, qnaData.german.answer)}
        </Text>
        <View style={styles.buttonContainer}>
          {wordButtons.map((word, index) => (
            <View key={word} style={{ width: "46%" }}>
              <WordButton
                key={word}
                index={index}
                title={word}
                onPress={handleButtonPress}
                isDisabled={word === selectedAnswer}
              />
            </View>
          ))}
        </View>
        <View style={styles.submitContainer}>
          <ContinueButton answer={selectedAnswer} />
        </View>
      </View>
    </View>
  );
};

export default Home;
