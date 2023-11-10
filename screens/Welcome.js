import React from 'react';
import { ImageBackground } from 'react-native';
import { Button, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';

const Welcome = () => {
  const navigation = useNavigation();
  const backgroundImage = require('../assets/toga.jpg');

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View alignItems="center">
        <Text fontSize="5xl" color={COLORS.white} mt={40}>
          Mahasiswaku
        </Text>

        <View space={2} alignItems="center">
          <Text fontSize="2xl" color={COLORS.white}>
            Plan Your
          </Text>
        </View>

        <Text fontSize="3xl" color={COLORS.white} mr={6} mt={500}>
          Dreams and Career
        </Text>

        <View flex={1} justifyContent="flex-end" marginBottom={32}>
          <Button
            onPress={() => navigation.navigate('Signup')}
            width={80}
            height={10}
            backgroundColor={COLORS.red}
            rounded={20}
            mt={5}
            my={3}
          >
            Continue
          </Button>
          <Text
            onPress={() => navigation.navigate('Login')}
            fontSize={16}
            color={COLORS.white}
            fontWeight="bold"
            marginTop={5}
            marginRight={20}
          >
            Already have an account? Login
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
