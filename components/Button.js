import React from 'react';
import { Pressable, Text } from 'native-base';
import COLORS from '../constants/colors';

const Button = (props) => {
  const filledBgColor = props.color || COLORS.red;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
    <Pressable
      style={{
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text fontSize="xl" color={textColor}>
        {props.title}
      </Text>
    </Pressable>
  );
};

export default Button;
