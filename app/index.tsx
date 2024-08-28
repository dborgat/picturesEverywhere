import React from 'react';
import { View, Button, FlatList, TouchableHighlight, Text } from 'react-native';
import useFotos from '@/hooks/useFotos';
import SinglePictureCard from '@/components/SinglePictureCard';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './index.styles';

function GalleryScreen() {
  const { photos, deleteSinglePhoto, handleShare } = useFotos();
  const router = useRouter();
  const {
    mainContainer,
    flatListColumnWrapper,
    flatListContentContainer,
    itemSeparator,
    cameraButtonStyle,
    cameraButtonText,
  } = styles;

  return (
    <View style={mainContainer}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        data={photos}
        renderItem={({ item }) => {
          return (
            <SinglePictureCard
              uri={item.uri}
              id={item.id}
              deleteSinglePhoto={deleteSinglePhoto}
              handleShare={handleShare}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={itemSeparator} />}
        columnWrapperStyle={flatListColumnWrapper}
        contentContainerStyle={flatListContentContainer}
      />
      <View style={itemSeparator} />
      <TouchableHighlight
        underlayColor='#DDDDDD'
        onPress={() =>
          router.push({
            pathname: '/TakePicture',
          })
        }
        style={cameraButtonStyle}
      >
        <>
          <Ionicons name='camera' color='#000000' size={40} />
          <Text style={cameraButtonText}>Tomar foto</Text>
        </>
      </TouchableHighlight>
    </View>
  );
}

export default GalleryScreen;
