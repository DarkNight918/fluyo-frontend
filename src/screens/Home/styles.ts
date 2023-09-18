import { StyleSheet } from "react-native";

// Theme
import theme from "../../themes/theme";

const styles = StyleSheet.create({
  container: {
    height: "83%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "#406d81",
    position: "relative",
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  subHeader: {
    color: "white",
    fontSize: 15,
    marginTop: 60,
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
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  answerContainer: {
    marginTop: 20,
  },
  popup: {
    position: "absolute",
    bottom: 0,
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  popupButton: {
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    fontWeight: "bold",
    width: "80%",
    backgroundColor: "white",
    textAlign: "center",
  },
  popupButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.rightColor,
  },
});

export default styles;
