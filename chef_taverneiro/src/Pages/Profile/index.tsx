import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { styles } from "./styleProfile";
import background from "../../assets/images/Perfil Background.png";
import { ImageBackground, Text, View, Image, TextInput } from "react-native";
import circulo from "../../assets/images/CirculoBranco.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { GetAllUsers } from "../../services/jsonServerApi";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Profile"
>;

export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllUsers();
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
          <Text style={styles.flexTextNome}>Nome:</Text>
          <TextInput
            style={styles.profileInputNome}
            value={name} // Update the value with the fetched data
            editable={false}
            placeholder="Aqui estará o nome."
          />

          <Text style={styles.flexTextEmail}>Email:</Text>
          <TextInput
            style={styles.profileInputEmail}
            value={email} // Update the value with the fetched data
            editable={false}
            placeholder="Aqui estará o Email."
          />
        </View>
      </View>
    </ImageBackground>
  );
};
