import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./StackRoutes";

export const Routes = () => {
    return( <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
  );
};
