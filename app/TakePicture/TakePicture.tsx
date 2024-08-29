import React, { useRef, useState, useEffect } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import styles from './TakePicture.styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useFotos from '@/hooks/usePictures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Loader from '@/components/Loader/Loader';
import Toast from 'react-native-root-toast';
import { ColorScheme } from '@/constants/Colors';
import { generateRandomId } from '@/helpers/generateRandomId';

export default function TakePicture() {
  const [permission, requestPermission] = useCameraPermissions();
  const [locationPermission, setLocationPermission] = useState(null);
  const [loadingTakePicture, setLoadingTakePicture] = useState(false);
  const cameraRef = useRef(null);
  const { setPictures, pictures } = useFotos();
  const router = useRouter();

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      // @ts-ignore
      setLocationPermission(status === 'granted');
    };

    requestLocationPermission();
  }, []);

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

  const takePicture = async () => {
    try {
      if (cameraRef.current && locationPermission) {
        setLoadingTakePicture(true);
        // @ts-ignore
        const photo = await cameraRef.current.takePictureAsync();
        const location = await Location.getCurrentPositionAsync({});

        const newPhoto = {
          id: generateRandomId(),
          uri: photo.uri,
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        };
        const updatedPhotos = [...pictures, newPhoto];
        setPictures(updatedPhotos);
        await AsyncStorage.setItem('pictures', JSON.stringify(updatedPhotos));
        router.push({ pathname: '/' });

        Toast.show('Su foto se capturó correctamente', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
          backgroundColor: ColorScheme.SHARE_BUTTON,
          opacity: 1,
        });
      } else {
        Toast.show('Permisos de ubicación no concedidos.', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
          backgroundColor: ColorScheme.DELETE_BUTTON,
          opacity: 1,
        });
      }
    } catch (error) {
      Toast.show('Hubo un error, por favor intente nuevamente', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor: ColorScheme.DELETE_BUTTON,
        opacity: 1,
      });
    } finally {
      setLoadingTakePicture(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        flash='auto'
        testID='camera-view'
      >
        {loadingTakePicture ? (
          <Loader title='Cargando foto...' />
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <FontAwesome
                name='dot-circle-o'
                size={90}
                color={ColorScheme.MODAL_BACKGROUND}
              />
            </TouchableOpacity>
          </View>
        )}
      </CameraView>
    </View>
  );
}
