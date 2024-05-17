import { useState } from 'react';
import { Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ResizeMode, Video } from 'expo-av';

import { icons } from '@/constants'; 

const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1.1,
  }
}

const zoomOut = {
  0: {
    scale: 1.1
  },
  1: {
    scale: 0.9,
  }
}

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false)

  return (
    <Animatable.View
      className='mr-5'
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status: any) => {
            if (status.didJustFinish) {
              setPlay(false)
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className='relative justify-center items-center'
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className='w-52 h-72 rounded-[35px] overflow-hidden
              shadow-lg shadow-black/40 my-5'
            resizeMode='cover'
          />
          <Image 
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}

    </Animatable.View>
  )
}

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0])

  const viewableItemsChanges = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key)
    }
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item: any) => item.$id}
      renderItem={({ item }: {item: any}) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanges}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{ x: 170 }}
      horizontal
    />
  )
}

export default Trending;