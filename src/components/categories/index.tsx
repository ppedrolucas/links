import { Category } from "@/components/category";
import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { styles } from "./styles";

export function Categories() {
  return (
    <FlatList
      //data aqui é a fonte de dados, ou seja, o array que contém as informações que serão renderizadas na lista. No caso, estamos usando o array "categories" importado do arquivo "@/utils/categories".
      data={categories}
      //keyExtractor é uma função que retorna um identificador único para cada item da lista.
      keyExtractor={(item) => item.id}
      //renderItem é uma função que define como cada item da lista deve ser renderizado. Ela recebe um objeto com a propriedade "item", que representa o item atual da lista. No exemplo, estamos renderizando um componente "Category" para cada item, passando as propriedades "name", "icon" e "isSelected".
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    />
  );
}
