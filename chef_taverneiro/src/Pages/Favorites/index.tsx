import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { ImageBackground, Text } from "react-native";
import { styles } from "./FavStyle";
import background from "../../assets/images/Madeira.png";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Favorites"
>;

export const Favorites = () => {
  return (
    <>
      <ImageBackground source={background} style={styles.favBackground}>
        <Text style={{ textAlign: "center", fontSize: 80 }}>Favorites</Text>
      </ImageBackground>
    </>
  );
};
