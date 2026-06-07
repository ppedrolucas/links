import { MaterialIcons } from "@expo/vector-icons"; //importando biblioteca de ícones do Expo.
import { Image, TouchableOpacity, View } from "react-native";

//Estilos
import { colors } from "@/styles/colors";

import { styles } from "./styles";

import { Categories } from "@/components/categories";

//Estrutura básica de um componente React Native
export default function Index() {
  //Por padrão o componente deve sempre retornar um JSX.
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      
      <Categories/>
    </View>
  );
}
