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
    paddingTop: 62,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.gray[200],
  },
  modalLinkUrl: {
    fontSize: 14,
    color: colors.gray[400],
  },
});
