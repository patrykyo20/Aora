import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item: any) => item.$id}
      renderItem={({ item }: {item: any}) => (
        <Text
          className='text-3xl text-white'
        >
          {item.id}
        </Text>
      )}
      horizontal
    />
  )
}

export default Trending;