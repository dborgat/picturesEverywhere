import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import styles from './Loader.styles';

const Loader = ({ title }: { title: string }) => {
  const { container, text } = styles;
  return (
    <View style={container}>
      <ActivityIndicator size='large' />
      <Text style={text}>{title}</Text>
    </View>
  );
};

export default Loader;
