import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from "./styleProfile";import background from "../../assets/images/Madeira.png"
import circulo from "../../assets/images/CirculoBranco.png";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { GetAllUsers } from '../../services/jsonServerApi';
import { UserDetailsProps } from '../../@types/interface';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Profile'
>;

export const Profile = () => {
    return <>
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}/>

          <View style={styles.containerCirculo}>
            <Image style={styles.circulo} source={circulo} />
            
          </View>
          <FontAwesomeIcon style={styles.profileIcon} icon={faAddressCard} size={100} />
          

          <View style={styles.containerNome}>
            <Text style={styles.flexTextNome}>Nome:</Text>
            <TextInput style={styles.inputNome}
              value={'Aqui estará o nome.'}
              editable={false}
              placeholder="Aqui estará o nome."
            />
          </View>

            <View style={styles.containerEmail}>
              <Text style={styles.flexTextEmail}>Email:</Text>
              <TextInput style={styles.inputEmail}
              value={'Aqui estará o Email.'}
              editable={false}
              placeholder = "Aqui estará o Email."
              
            />
            </View>
        <ImageBackground/>
      </View>
      
      </>
     
  
};
