import { TouchableOpacity, Text } from 'react-native'
import { FC } from 'react'

interface ButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px]
        justify-center items-center ${containerStyles} ${isLoading? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text
        className={`text-primary font-psemibold text-lg ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;