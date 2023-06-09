import { StyleSheet } from 'react-native';
import { PostsScreen } from './Screens/PostsScreen'
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { useFonts } from 'expo-font';

export default function App() {

   const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
   });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    // <RegistrationScreen></RegistrationScreen>
    <LoginScreen></LoginScreen>
  );
}

