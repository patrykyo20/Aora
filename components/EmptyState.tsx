import { View, Image, Text } from 'react-native'
import { FC } from 'react'

import { images } from '@/constants'

import Button from '@/components/Button'
import { router } from 'expo-router';

interface EmptyStateProps {
  title: string;
  subtitle: string;
};

const EmptyState: FC<EmptyStateProps> = ({title, subtitle}) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image
        source={images.empty}
        className='w-[270px] h-[215px]'
        resizeMode='contain'
      />

      <Text
        className='font-pmedium text-sm
        text-gray-100'
      >
        {subtitle}
      </Text>
      <Text
        className='text-2xl font-psemibold text-white'
      >
        {title}
      </Text>

      <Button
        title='Create a video'
        handlePress={() => router.push('/create')}
        containerStyles='w-full my-5'
      />
    </View>
  )
}

export default EmptyState