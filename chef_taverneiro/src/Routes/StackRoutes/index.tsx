import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Pages/Login';
import CadastroScreen from '../../Pages/Cadastro';
import { BottomTabRoutes } from '../BottomTabRoutes';
import { ReceitaEspecifica } from '../../Pages/ReceitaEspecifica';

const Stack = createStackNavigator<StackRoutesParamList>();

export type StackRoutesParamList = {
    LoginScreen: undefined,
    CadastroScreen: undefined,
    Home: undefined,
    ReceitaEspecifica: undefined,
}

export function AppNavigator () {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="Home" component={BottomTabRoutes} />
        <Stack.Screen name="ReceitaEspecifica" component={ReceitaEspecifica} />
      </Stack.Navigator>
  );
};


