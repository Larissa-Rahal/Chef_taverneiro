import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from "../Login/styleLogin";
import background from "../../assets/images/Madeira.png"
import { useEffect, useState } from 'react';
// import { GetAllUsers, UserDetailsProps } from '../../services/jsonServerApi';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Profile'
>;

export const Profile = () => {
  // const [user, setUser] = useState<UserDetailsProps[]>([]);

  //   useEffect( () => { 
  //     async function fetchAllUsers() {
  //     try {
  //         const response = await GetAllUsers();
  //         setUser(response.data);
  //     } catch (error) {
  //         console.error('Erro na requisição:', error);
  //     }
  //     }

  //     fetchAllUsers();
  //   },[])

    return<>
     <ImageBackground source={background} style={styles.background}>
         <ScrollView>
          <Text>USER</Text>
         {/* {user.map((u) => (
                <View key={u.id}>
                  <Text style={{textAlign: 'center', fontSize: 100, color: 'black'}}>{u.nome}</Text>
                </View>
            ))} */}
         </ScrollView>
     </ImageBackground>
    </>
}