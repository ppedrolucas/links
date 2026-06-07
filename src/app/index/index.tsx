import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

//Estrutura básica de um componente React Native
export default function Index() {
  //Por padrão o componente deve sempre retornar um JSX.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, </Text>
      <Text style={styles.title}>React Native!</Text>
    </View>
  );
}


