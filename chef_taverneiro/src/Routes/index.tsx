import { NavigationContainer } from "@react-navigation/native"
import { BottomTabRoutes } from "./BottomTabRoutes"
import CadastroScreen from "../Pages/Cadastro"
import LoginScreen from "../Pages/Login"

export const Routes = () => {
    return <NavigationContainer>
        <LoginScreen/>
    </NavigationContainer>
}