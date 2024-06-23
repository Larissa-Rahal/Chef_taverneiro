import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs/";
import { RootTabParamList } from "../../Routes/BottomTabRoutes";
import { styles } from "./styleProfile";
import background from "../../assets/images/Madeira.png";
import { ImageBackground, Text, View, Image, TextInput } from "react-native";
import circulo from "../../assets/images/CirculoBranco.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  "Profile"
>;

export const Profile = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.container}>

        <View style={styles.containerCirculo}>
          <Image style={styles.circulo} source={circulo} />
        </View>
        
        <FontAwesomeIcon
          style={styles.profileIcon}
          icon={faAddressCard}
          size={100}
        />

        <View>
          <View style={styles.containerImput}>
            <Text style={styles.flexTextNome}>Nome:</Text>
            <TextInput
              style={styles.inputNome}
              value={"Aqui estará o nome."}
              editable={false}
              placeholder="Aqui estará o nome."
            />

            <Text style={styles.flexTextEmail}>Email:</Text>
            <TextInput
              style={styles.inputEmail}
              value={"Aqui estará o Email."}
              editable={false}
              placeholder="Aqui estará o Email."
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
