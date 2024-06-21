import { NavigationContainer } from "@react-navigation/native";
import { BottomTabRoutes } from "./BottomTabRoutes";
import CadastroScreen from "../Pages/Cadastro";

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
};
