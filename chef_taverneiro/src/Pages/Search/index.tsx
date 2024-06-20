import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';
import { ImageBackground, Text } from 'react-native';
import { styles } from "../Login/styleLogin";
import background from "../../assets/images/Madeira.png"

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Search'
>;

export const Search = () => {
    return<>
     <ImageBackground source={background} style={styles.background}>
     <Text style={{textAlign: 'center', fontSize: 80}}>SEARCH</Text>
     </ImageBackground>
     
    </>
}