import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Pages/Login';
import CadastroScreen from '../../Pages/Cadastro';

const Stack = createStackNavigator<StackRoutesParamList>();

export type StackRoutesParamList = {
    LoginScreen: undefined,
    CadastroScreen: undefined,
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
