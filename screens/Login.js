import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Input, CheckBox, Button, HStack, Pressable, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';

const Login = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView flex={1} bg={COLORS.white}>
      <View flex={1} mx={4} my={6}>
        <View my={6}>
          <Text fontSize="2xl" fontWeight="bold" my={2} color={COLORS.black}>
            Hi Welcome Back ! 👋
          </Text>
          <Text fontSize="lg" color={COLORS.black}>
            Hello again you have been missed!
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

        <HStack my={2} alignItems="center">
          <CheckBox value={isChecked} onChange={() => setIsChecked(!isChecked)} colorScheme={COLORS.primary} />
          <Text>Remember Me</Text>
        </HStack>

        <Button
          my={4}
          colorScheme={COLORS.primary}
          onPress={() => {}}
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
