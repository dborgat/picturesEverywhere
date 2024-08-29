import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useFotos from '@/hooks/usePictures';
import styles from './PictureDetailsScreen.styles';
import { Ionicons } from '@expo/vector-icons';
import { ColorScheme } from '@/constants/Colors';

export default function PictureDetailsScreen() {
  const { photoId } = useLocalSearchParams();
  const { onSelectedPhoto, handleShare } = useFotos();
  const {
    container,
    image,
    containerMap,
    map,
    shareIconButton,
    shareTextButton,
  } = styles;
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

      <TouchableOpacity
        onPress={() => handleShare(selectedPhoto?.uri)}
        style={shareIconButton}
      >
        <Ionicons
          name='share-social-sharp'
          size={25}
          color={ColorScheme.BACKGROUND}
        />
        <Text style={shareTextButton}>Compartir</Text>
      </TouchableOpacity>
    </View>
  );
}
