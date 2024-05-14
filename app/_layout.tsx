import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poopins-Black": require('../assets/fonts/Poopins-Black.ttf'),
    "Poopins-Bold": require('../assets/fonts/Poopins-Bold.ttf'),
    "Poopins-Light": require('../assets/fonts/Poopins-Light.ttf'),
    "Poopins-Regular": require('../assets/fonts/Poopins-Regular.ttf'),
    "Poopins-SemiBold": require('../assets/fonts/Poopins-SemiBold.ttf'),
    "Poopins-ExtraBold": require('../assets/fonts/Poopins-ExtraBold.ttf'),
    "Poopins-Medium": require('../assets/fonts/Poopins-Medium.ttf'),
    "Poopins-Thin": require('../assets/fonts/Poopins-Thin.ttf'),
    "Poopins-ExtraLight": require('../assets/fonts/Poopins-ExtraLight.ttf'),
  });

  useEffect(() => {
    if (error) throw error; 

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false,
      }}/>
    </Stack>
  )
}

export default RootLayout;