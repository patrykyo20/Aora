import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Image, Text } from 'react-native';
import 'react-native-reanimated';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import Button from '@/components/Button';
import { useGlobalContext } from '@/context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href='home' />;
  }

  return (
    <SafeAreaView className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          height: '100%',
        }}
      >
        <View
          className='w-full items-center justify-center min-h-[85vh] px-4'
        >
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5 p-4'>
            <Text
              className='text-3xl font-bold text-white text-center'
            >
              Discover Endless Possibilities with {' '}
              <Text
                className='text-secondary-200'
              >
                Aora
              </Text>

            </Text>
            
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute bottom-2 -right-4'
              resizeMode='contain'
            />
          </View>

          <Text
            className='text-sm font-pregular text-gray-100 mt-7
              text-center'
          >
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <Button
            title="Countinue with email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
  
      <StatusBar
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  );
}