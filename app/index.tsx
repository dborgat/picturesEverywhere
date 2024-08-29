import React from 'react';
import { View, Button, FlatList, TouchableHighlight, Text } from 'react-native';
import useFotos from '@/hooks/usePictures';
import SinglePictureCard from '@/components/SinglePictureCard/SinglePictureCard';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from './index.styles';
import { ColorScheme } from '@/constants/Colors';
import Loader from '@/components/Loader/Loader';

function GalleryScreen() {
  const { pictures, deleteSinglePicture, handleShare, loading } = useFotos();
  const router = useRouter();
  const {
    mainContainer,
    flatListColumnWrapper,
    flatListContentContainer,
    itemSeparator,
    cameraButtonStyle,
    cameraButtonText,
    emptyListContainer,
    emptyListText,
  } = styles;

  return (
    <View style={mainContainer}>
      {loading ? (
        <Loader title='Cargando fotos ...' />
      ) : (
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          data={pictures}
          ListEmptyComponent={() => (
            <View style={emptyListContainer}>
              <Text style={emptyListText}>No hay fotos 📸</Text>
            </View>
          )}
          renderItem={({ item }) => {
            return (
              <SinglePictureCard
                uri={item.uri}
                id={item.id}
                deleteSinglePicture={deleteSinglePicture}
                handleShare={handleShare}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={itemSeparator} />}
          columnWrapperStyle={flatListColumnWrapper}
          contentContainerStyle={flatListContentContainer}
        />
      )}
      <View style={itemSeparator} />
      <TouchableHighlight
        underlayColor={ColorScheme.SHARE_BUTTON}
        onPress={() =>
          router.push({
            pathname: '../TakePicture/TakePicture',
          })
        }
        style={cameraButtonStyle}
      >
        <>
          <Ionicons name='camera' color={ColorScheme.BACKGROUND} size={40} />
          <Text style={cameraButtonText}>Tomar foto</Text>
        </>
      </TouchableHighlight>
    </View>
  );
}

export default GalleryScreen;
