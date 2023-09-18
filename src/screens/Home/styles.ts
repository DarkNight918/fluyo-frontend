import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "83%",
    padding: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "#406d81",
    position: "relative",
  },
  component: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    height: "100%",
  },
  subHeader: {
    color: "white",
    fontSize: 15,
  },
  header: {
    color: "white",
    fontSize: 30,
  },
  answer: {
    color: "white",
    fontSize: 23,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
    marginHorizontal: -5,
  },
  submitContainer: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignItems: "center",
  },
  answerContainer: {
    marginTop: 20,
  },
});

export default styles;
