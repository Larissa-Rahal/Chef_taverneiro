import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./StackRoutes";
import { Profile } from "../Pages/Profile";

export const Routes = () => {
  return (
    <NavigationContainer>
      <Profile />
    </NavigationContainer>
  );
};
