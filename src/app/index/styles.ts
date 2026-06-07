import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

//Para conseguirmos usar esse StyleSheet em outros arquivos, precisamos exportá-lo.
export const styles = StyleSheet.create({
  title: {
    color: colors.gray[900],
    fontSize: 22,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
