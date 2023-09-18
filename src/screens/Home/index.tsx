import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import styles from "./styles";

// Functions
import { getQNA } from "../../functions/qna.functions";

// Components
import { WordButton, ContinueButton } from "../../components/Buttons";
import Word from "../../components/Word";

// Types
import { QNADataType } from "../../types";

// Theme
import theme from "../../themes/theme";

const Home: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [qnaIndex, setQNAIndex] = useState<number>(0);

  const [qnaData, setQNAData] = useState<QNADataType>();

  const wordButtons = qnaData?.selections;

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedbackText, setFeedbackText] = useState<string>("");

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
            return (
              <Word
                key={index}
                word={word}
                tooltip={qnaData?.english.text.split(" ")[index] || ""}
              />
            );
          }
        })}
      </View>
    );
  };

  // set the answer
  const handleButtonPress = (title: string) => {
    setSelectedAnswer(title);
  };

  // check the answer is right or not
  const handleCheckAnswer = () => {
    if (selectedAnswer === qnaData?.german.answer) {
      setIsCorrect(true);
      setFeedbackText("Great Job!");
    } else {
      setIsCorrect(false);
      setFeedbackText(`Answer: ${qnaData?.german.answer}`);
    }
  };

  // function when continue button clicked
  // go to next qna
  const goNext = () => {
    setQNAIndex((prev) => prev + 1);
    setIsCorrect(null);
    setSelectedAnswer("");
  };

  useEffect(() => {
    // get question and answer data
    const getData = async () => {
      // only five datas in backend, use index with mod 5
      let data = await getQNA(qnaIndex % 5);
      setQNAData(data);
    };

    getData();
  }, [qnaIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Fill in the missing word</Text>
      <Text style={styles.header}>
        {qnaData &&
          renderQuestion(qnaData.english.text, qnaData.english.answer)}
      </Text>
      <Text style={styles.answerContainer}>
        {qnaData && renderAnswer(qnaData.german.text, qnaData.german.answer)}
      </Text>
      <View style={styles.buttonContainer}>
        {wordButtons &&
          wordButtons.map((word, index) => (
            <View key={word} style={{ width: "47%" }}>
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
        <ContinueButton answer={selectedAnswer} onPress={handleCheckAnswer} />
      </View>
      {isCorrect !== null && (
        <View
          style={[
            styles.popup,
            {
              backgroundColor: isCorrect
                ? theme.colors.rightColor
                : theme.colors.wrongColor,
            },
          ]}
        >
          <Text style={{ color: "white", fontSize: 18 }}>{feedbackText}</Text>
          <TouchableOpacity style={styles.popupButton} onPress={goNext}>
            <Text style={styles.popupButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Home;
