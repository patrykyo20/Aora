import { ScrollView, Image, View, Text, Alert } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { Link, router } from 'expo-router';

import FormField from '@/components/FormField';
import Button from '@/components/Button';

import { createUser } from '@/lib/appwrite';


const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmiting, setIsSubmiting] = useState(false);

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    console.log(form.username)

    console.log(2)

    setIsSubmiting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);

      console.log(result);

      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  useEffect(() => {
    console.log(form)
  }, [form]);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View
          className='w-full justify-center min-h-[80vh] px-4 my-6'
        >
          <Image
            source={images.logo}
            className='w-[115px] h-[35px]'
            resizeMode='contain'
          />
          <Text
            className='text-2xl text-white text-semibold mt-10
              font-psemibold'
          >
            Sign up to Aora
          </Text>
        
          <FormField
            title='Username'
            placeholder='username'
            value={form.username}
            handleChangeText={(text: string) => setForm({...form, username: text})}
            otherStyles='mt-7'
          />

          <FormField
            title='Email'
            placeholder='email'
            value={form.email}
            handleChangeText={(e: any) => setForm({...form, email: e})}
            otherStyles='mt-7'
            keyBoardType='email-address'
          />

          <FormField
            title='Password'
            placeholder='password'
            value={form.password}
            handleChangeText={(e: any) => setForm({...form, password: e})}
            otherStyles='mt-7'
          />

          <Button
            title="Sign up"
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmiting}
          />

          <View
            className='justify-center pt-5 flex-row gap-2'
          >
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an already an account?
            </Text>
            <Link
              href='sign-in'
              className='text-lg font-psemibold text-secondary-100'
            >
              Log in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;
