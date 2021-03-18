import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/router';
import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })

  if(!loaded)
    return null;

  return (
    <Router />
  );
}