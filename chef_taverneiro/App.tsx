import LoginScreen from './src/Pages/Login';
import { Routes } from './src/Routes';
import UserProvider from './src/context/userProvider';


export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};


