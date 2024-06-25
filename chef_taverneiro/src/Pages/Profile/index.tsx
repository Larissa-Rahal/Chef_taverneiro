import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { styles } from "./styleProfile";
import background from "../../assets/images/Madeira.png";
import { ImageBackground, Text, View, Image } from "react-native";
import circulo from "../../assets/images/CirculoBranco.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import UserContext from "../../context/userContext";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Profile"
>;

export const Profile = () => {
  const { usuario } = useContext(UserContext);
  return (
    <ImageBackground source={background} style={styles.profileBackground}>
      <View style={styles.profileContainer}>
        <View style={styles.containerCirculo}>
          <Image style={styles.circulo} source={circulo} />
          <FontAwesomeIcon
            style={styles.profileIcon}
            icon={faAddressCard}
            size={100}
          />
        </View>

        <View style={styles.containerImput}>

          <Text style={styles.flexTextNome}>Id:</Text>
          <Text style={styles.profileInputNome}>{usuario.id}</Text>

          <Text style={styles.flexTextNome}>Nome:</Text>
          <Text style={styles.profileInputNome}>{usuario.nome}</Text>

          <Text style={styles.flexTextEmail}>Email:</Text>
          <Text style={styles.profileInputNome}>{usuario.email}</Text>

        </View>
      </View>
    </ImageBackground>
  );
};
