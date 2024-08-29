import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Location from 'expo-location';
import useFotos from '@/hooks/usePictures';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import styles from './TakePicture.styles';
import { ColorScheme } from '@/constants/Colors';
import Loader from '@/components/Loader/Loader';
import { generateRandomId } from '@/helpers/generateRandomId';
import Toast from 'react-native-root-toast';

export default function TakePicture() {
  const [permission, requestPermission] = useCameraPermissions();
  const [loadingTakePicture, setLoadingTakePicture] = useState(false);
  const cameraRef = useRef(null);
  const { setPictures, pictures } = useFotos();
  const { container, camera, buttonContainer, button } = styles;
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

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        setLoadingTakePicture(true);
        // @ts-ignore
        const photo = await cameraRef.current.takePictureAsync();
        let location = await Location.getCurrentPositionAsync({});

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
        router.push({
          pathname: '/',
        });
        Toast.show('Su foto se capturó correctamente', {
          duration: Toast.durations.SHORT,
          position: Toast.positions.TOP,
          backgroundColor: ColorScheme.SHARE_BUTTON,
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
    <View style={container}>
      <CameraView ref={cameraRef} style={camera} flash='auto' testID='camera-view'>
        {loadingTakePicture ? (
          <Loader title='Cargando foto...' />
        ) : (
          <View style={buttonContainer}>
            <TouchableOpacity style={button} onPress={takePicture}>
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
