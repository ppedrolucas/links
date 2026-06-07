import { MaterialIcons } from "@expo/vector-icons"; //importando biblioteca de ícones do Expo.
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//Estilos
import { colors } from "@/styles/colors";
import { styles } from "./styles";

//Componentes
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";

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

      <Categories />

      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://www.rocketseat.com.br"
            onDetails={() => console.log("Clicou")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Modal Title</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalLinkUrl}>
              https://www.rocketseat.com.br
            </Text>
            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
