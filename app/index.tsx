import { StatusBar, View, Text,  } from 'react-native';
import 'react-native-reanimated';
import { Link } from 'expo-router';

export default function RootLayout() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl'>Hello, moge kielona?</Text>
      <Link href={'profile'} style={{ color: 'blue' }}>
        Go to Profile
      </Link>
    </View>
  );
}