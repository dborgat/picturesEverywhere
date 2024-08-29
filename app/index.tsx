import React from 'react';
import { View, FlatList, Text } from 'react-native';
import useFotos from '@/hooks/usePictures';
import SinglePictureCard from '@/components/SinglePictureCard/SinglePictureCard';
import { useRouter } from 'expo-router';
import styles from './index.styles';
import Loader from '@/components/Loader/Loader';
import TouchableOpacityButton from '@/components/TouchableOpacityButton/TouchableOpacityButton';

function GalleryScreen() {
  const { pictures, deleteSinglePicture, handleShare, loading } = useFotos();
  const router = useRouter();
  const {
    mainContainer,
    flatListColumnWrapper,
    flatListContentContainer,
    itemSeparator,
    cameraButtonStyle,
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
      <TouchableOpacityButton
        title='Tomar foto'
        icon='openCamera'
        onPressAction={() =>
          router.push({
            pathname: '../TakePicture/TakePicture',
          })
        }
        buttonColor={cameraButtonStyle}
        size={25}
      />
    </View>
  );
}

export default GalleryScreen;
