import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import * as Location from 'expo-location';
import useFotos from '@/hooks/usePictures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import styles from './takePicture.styles';

export default function TakePicture() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const { setPictures, pictures } = useFotos();
  const { iconCameraStyle, container, camera, buttonContainer, button } =
    styles;
  const router = useRouter();

  if (!permission?.granted || !permission) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Necesitamos que nos des permiso para acceder a la cámara
        </Text>
        <Button onPress={requestPermission} title='Otorgar permisos' />
      </View>
    );
  }

  const generateId = () => {
    return Math.random().toString(36).substring(7);
  };

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        // @ts-ignore
        const photo = await cameraRef.current.takePictureAsync();
        let location = await Location.getCurrentPositionAsync({});

        const newPhoto = {
          id: generateId(),
          uri: photo.uri,
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        };
        const updatedPhotos = [...pictures, newPhoto];
        setPictures(updatedPhotos);
        await AsyncStorage.setItem('pictures', JSON.stringify(updatedPhotos));
      }
    } catch (error) {
      console.log('Error taking picture', error);
    } finally {
      router.push({
        pathname: '/',
      });
    }
  };

  return (
    <View style={container}>
      <CameraView ref={cameraRef} style={camera} flash='auto'>
        <View style={buttonContainer}>
          <TouchableOpacity style={button} onPress={takePicture}>
            <Feather name='circle' size={60} style={iconCameraStyle} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
