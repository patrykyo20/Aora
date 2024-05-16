import { View, Text, TextInput, Image, TouchableOpacity, Touchable } from 'react-native'
import { FC, useState } from 'react'
import { icons } from '@/constants';

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: any) => void;
  keyBoardType?: string;
  otherStyles?: string;
  props?: any;
}

const SearchInput: FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyBoardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (

      <View
        className="w-full h-16 px-4 bg-black-100 rounded-2xl
          border-2 border-black-200 focus:border-secondary
          flex flex-row items-center space-x-4"
      >
        <TextInput
          className="text-base mt-0.5 text-white flex-1
            font-pregular"
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
  );
}

export default SearchInput;