import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Home } from "../../Pages/Home";
import { Profile } from "../../Pages/Profile";
import { Search } from "../../Pages/Search";
import { Favorites } from "../../Pages/Favorites";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';




const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined,
    Search: undefined,
    Favorites: undefined,
    Profile: undefined,
    MealById: undefined
}

export function BottomTabRoutes() {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#221506', paddingBottom: 2 }, // Remova a cor de fundo e torne transparente
            tabBarActiveTintColor: '#ebe1d5',
            tabBarInactiveTintColor: '#a1886abd',
        }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHouse} color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faMagnifyingGlass} color={color} size={size} />
                    ),
                }}
            />
             <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHeart} color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faUser} color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}