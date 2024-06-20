import { NavigationContainer } from "@react-navigation/native"
import { BottomTabRoutes } from "./BottomTabRoutes"

export const Routes = () => {
    return <NavigationContainer>
        <BottomTabRoutes/>
    </NavigationContainer>
}