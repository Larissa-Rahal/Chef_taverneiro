import { NavigationContainer } from "@react-navigation/native";
import { BottomTabRoutes } from "./BottomTabRoutes";
import CadastroScreen from "../Pages/Cadastro";

import LoginScreen from "../Pages/Login";
import { AppNavigator } from "./StackRoutes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
