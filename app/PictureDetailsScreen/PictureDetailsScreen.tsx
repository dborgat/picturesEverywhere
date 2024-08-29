import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useFotos from '@/hooks/usePictures';
import styles from './PictureDetailsScreen.styles';
import TouchableOpacityButton from '@/components/TouchableOpacityButton/TouchableOpacityButton';

export default function PictureDetailsScreen() {
  const { photoId } = useLocalSearchParams();
  const { onSelectedPhoto, handleShare } = useFotos();
  const { container, image, containerMap, map, shareIconButton } = styles;
  const selectedPhoto = onSelectedPhoto(photoId);

  return (
    <View style={container}>
      <Image source={{ uri: selectedPhoto?.uri }} style={image} />
      <View style={containerMap}>
        {selectedPhoto?.location && (
          <MapView
            scrollEnabled={false}
            style={map}
            initialRegion={{
              latitude: selectedPhoto.location.latitude || 0,
              longitude: selectedPhoto.location.longitude || 0,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: selectedPhoto.location.latitude,
                longitude: selectedPhoto.location.longitude,
              }}
            />
          </MapView>
        )}
      </View>
      <TouchableOpacityButton
        title='Compartir'
        onPressAction={() => handleShare(selectedPhoto?.uri)}
        buttonColor={shareIconButton}
        size={25}
        icon='share'
      />
    </View>
  );
}
