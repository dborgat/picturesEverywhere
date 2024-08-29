import React from 'react';
import { ColorScheme } from '@/constants/Colors';
import { ICONS } from '@/constants/icons';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../SinglePictureCard/SinglePictureCard.styles';

interface IconMap {
  [key: string]: React.ReactNode;
}

const TouchableOpacityButton = ({
  title,
  icon,
  buttonColor,
  size,
  onPressAction,
}: {
  title: string;
  icon?: string;
  buttonColor: { backgroundColor: string };
  size?: number;
  onPressAction: () => void;
}) => {
  const { actionButtons } = styles;

  return (
    <TouchableOpacity
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
