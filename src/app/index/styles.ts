//Cominhos Relativos: O caminho relativo é o caminho que leva a um arquivo a partir do arquivo atual. Ele é representado por "./" para indicar o diretório atual e "../" para indicar o diretório pai. Por exemplo, se estamos no arquivo "src/app/index/index.tsx" e queremos importar algo do arquivo "src/app/index/styles.ts", podemos usar o caminho relativo "./styles".
import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

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
