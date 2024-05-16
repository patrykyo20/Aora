import { Text, FlatList, View, Image, RefreshControl } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
  }

  return (
    <SafeAreaView
      className='bg-primary h-full'
    >
      <FlatList 
        data={[]}
        keyExtractor={(item: any) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-white text-3xl'>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View
            className='my-6 px-4'
          >
            <View
              className='justify-between items-start
                flex-row mb-6'
            >
              <View>
                <Text
                  className='font-pmedium text-sm
                    text-gray-100'
                >
                  Welcome back
                </Text>
                <Text
                  className='text-2xl font-psemibold text-white'
                  
                >
                  JsMastery
                </Text>
              </View>
              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput title={''} value={''} placeholder={''} handleChangeText={function (text: any): void {
              throw new Error('Function not implemented.');
            } } />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1}, { id: 2}, { id: 3} ?? []]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No videos found'
            subtitle='Be the first to create a video'
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Home;
