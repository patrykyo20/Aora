import { View, Text, Image, TouchableOpacity } from 'react-native'
import { icons } from '@/constants';
import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({video}: {video: any}) => {
  const [play, setPlay] = useState(false)
  const { creator } = video;

  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row'>
          <View
            className='w-[46px] h-[46px] rounded-lg border
              border-secondary justify-center itemst-center
              p-0.5'
          >
            <Image
              source={{ uri: creator.avatar }}
              className='w-full h-full rounded-lg'
              resizeMode='cover'
            />
          </View>
          <View
            className='justify-center flex-1 ml-3 gap-y-1'
          >
            <Text
              className='text-white font-psemibold text-sm'
              numberOfLines={1}
            >
              {video.title}
            </Text>
            <Text
              className='text-xs text-gray-100
                font-pregular' numberOfLines={1}
            >
              {creator.name}
            </Text>
          </View>
          <View className='pt-2'>
          <Image
            source={icons.menu}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </View>
        </View>


      </View>

      {play ? (
        <Video
          source={{ uri: video.video }}
          className='w-full h-60 rounded-xl mt-3 bg-white/10'
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
          className='w-full h-60 rounded-xl mt-3
            relative justify-center items-center'
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: video.thumbnail }}
            className='w-full h-full rounded-xl mt-3'
            resizeMode='cover'
          />
          <Image
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard