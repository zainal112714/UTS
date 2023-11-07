import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Input, Checkbox, Button, HStack, Pressable, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView flex={1} bg={COLORS.white}>
      <View flex={1} mx={4} my={6}>
        <View my={6}>
          <Text fontSize="2xl" fontWeight="bold" my={2} color={COLORS.black}>
            Create Account
          </Text>
          <Text fontSize="lg" color={COLORS.black}>
            Connect with your friend today!
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
            Mobile Number
          </Text>
          <HStack space={2} alignItems="center" borderColor={COLORS.black} borderWidth={1} borderRadius={8}>
            <Input
              placeholder="+91"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              width="12%"
              borderRightWidth={1}
              borderLeftColor={COLORS.grey}
            />
            <Input placeholder="Enter your phone number" placeholderTextColor={COLORS.black} keyboardType="numeric" width="80%" />
          </HStack>
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
          <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)} colorScheme={COLORS.primary} />
          <Text>I agree to the terms and conditions</Text>
        </HStack>

        <Button
          my={4}
          colorScheme={COLORS.secondary}
          onPress={() => {}}
        >
          Sign Up
        </Button>

        <HStack alignItems="center" my={10}>
          <View flex={1} h={1} bg={COLORS.grey} mx={2} />
          <Text fontSize="lg">Or Sign up with</Text>
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
          <Text fontSize="lg" color={COLORS.black}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text fontSize="lg" fontWeight="bold" color={COLORS.primary}>Login</Text>
          </Pressable>
        </HStack>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
