//Stack é um componente do Expo Router que permite criar uma pilha de navegação entre as telas do aplicativo. Ele é usado para organizar as telas em uma hierarquia, onde cada tela pode ser empilhada sobre a anterior. Isso facilita a navegação entre as telas e mantém o histórico de navegação do usuário.

//_layout.tsx é um arquivo de layout que define a estrutura básica do aplicativo. Ele é usado para envolver as telas do aplicativo e fornecer uma navegação consistente entre elas. O Stack é usado dentro do layout para criar a pilha de navegação entre as telas do aplicativo.
import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function Layout() {
  //Shortsintex
  const backgroundColor = colors.gray[950];

  return (
    <Stack
      //configurações de navegação: ocultar o cabeçalho de navegação e definir o background padrão do App.
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
