import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

//Definindo a tipagem das propriedades do componente.
type Props = PressableProps & {
  name: string;
  //O tipo do ícone é definido como uma chave do objeto glyphMap da biblioteca MaterialIcons, garantindo que apenas ícones válidos possam ser usados.
  icon: keyof typeof MaterialIcons.glyphMap;
};

//Tipando as props do componente, para garantir que o nome do ícone seja válido e evitar erros de digitação.
export function Category({ name, icon, ...rest }: Props) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}
