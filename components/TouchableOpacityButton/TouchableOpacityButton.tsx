import React from 'react';
import { ColorScheme } from '@/constants/Colors';
import { ICONS } from '@/constants/icons';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../SinglePictureCard/SinglePictureCard.styles';
import { TouchableOpacityButtonProps } from '@/types';

interface IconMap {
  [key: string]: React.ReactNode;
}

const TouchableOpacityButton = ({
  title,
  icon,
  buttonColor,
  size,
  onPressAction,
  testId,
}: TouchableOpacityButtonProps) => {
  const { actionButtons } = styles;

  return (
    <TouchableOpacity
      testID={testId}
      onPress={onPressAction}
      style={[actionButtons, buttonColor]}
    >
      {icon && (ICONS as IconMap)[icon]}
      <Text
        style={{
          color: ColorScheme.BACKGROUND,
          fontWeight: 'bold',
          fontSize: size ?? 15,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityButton;
