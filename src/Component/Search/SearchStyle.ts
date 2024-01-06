import { StyleSheet } from "react-native";
import { colors } from "../../UI/Colors";
const searchStyles = StyleSheet.create({
  container: {
    margin: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5%",
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
  },
  input: {
    width: "85%",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default searchStyles;
