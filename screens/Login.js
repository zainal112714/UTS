import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { View, Text, Input, CheckBox, Button, HStack, Pressable, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import center from 'native-base/src/theme/components/center';

const Login = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleLoginPress = () => {
    Alert.alert('Login berhasil', 'Selamat, Anda telah berhasil login!');
  };

  return (
    <SafeAreaView flex={1} bg={COLORS.white}>
      <View flex={1} mx={4} my={6}>
        <View my={6} style={{ alignItems: 'center'}}>
          <Text fontSize="2xl" fontWeight="bold" my={2} color={COLORS.red} textAlign= 'center'>
            Mahasiswaku
          </Text>
          <Text fontSize="2xl" fontWeight="bold" my={2} color={COLORS.black} marginTop={10} textAlign={'left'}>
            Sing In
          </Text>
          <Text fontSize="lg" color={COLORS.black}>
            Enter your registered email address or phone number to log in
          </Text>
        </View>

        <View my={4}>
          <Text fontSize="lg" fontWeight={400} my={2}>
            Email address
          </Text>
          <Input
            variant="underlined"
            placeholder="Enter your email address"
            keyboardType="email-address"
            borderColor={COLORS.black}
            _focus={{ borderColor: COLORS.black }}
          />
        </View>

        <View my={4}>
          <Text fontSize="lg" fontWeight={400} my={2}>
            Password
          </Text>
          <HStack space={2} alignItems="center" borderColor={COLORS.black} borderWidth={1} borderRadius={8}>
            <Input
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              flex={1}
            />
            <Pressable onPress={() => setIsPasswordShown(!isPasswordShown)}>
              <Ionicons name={isPasswordShown ? 'eye-off' : 'eye'} size={24} color={COLORS.black} />
            </Pressable>
          </HStack>
        </View>

        {/* <View style={{ flexDirection:'row', alignItems: 'center', marginVertical: 2}}>
          <CheckBox value={isChecked} onChange={() => setIsChecked(!isChecked)} colorScheme={COLORS.primary} />
          <Text>Remember Me</Text>
        </View> */}
        

        <Button
          my={4}
          colorScheme={COLORS.primary}
          backgroundColor={COLORS.red}
          rounded={10}
          onPress={handleLoginPress}
        >
          Login
        </Button>

        <HStack alignItems="center" my={10}>
          <View flex={1} h={1} bg={COLORS.grey} mx={2} />
          <Text fontSize="lg">Or Login with</Text>
          <View flex={1} h={1} bg={COLORS.grey} mx={2} />
        </HStack>

        <HStack space={2}>
          <Pressable onPress={() => console.log('Pressed')} borderWidth={1} borderColor={COLORS.grey} borderRadius={10} flex={1} py={2} alignItems="center">
            <Image
              source={require('../assets/facebook.png')}
              alt="Facebook"
              size={6}
              mr={2}
            />
            <Text>Facebook</Text>
          </Pressable>

          <Pressable onPress={() => console.log('Pressed')} borderWidth={1} borderColor={COLORS.grey} borderRadius={10} flex={1} py={2} alignItems="center">
            <Image
              source={require('../assets/google.png')}
              alt="Google"
              size={6}
              mr={2}
            />
            <Text>Google</Text>
          </Pressable>
        </HStack>

        <HStack justifyContent="center" my={6}>
          <Text fontSize="lg" color={COLORS.black}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text fontSize="lg" fontWeight="bold" color={COLORS.primary}>Register</Text>
          </Pressable>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default Login;
