import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';
import Toast from 'react-native-root-toast';
import { ColorScheme } from '@/constants/Colors';
import { PicturesProps } from '@/types';

const usePictures = () => {
  const [pictures, setPictures] = useState<PicturesProps[]>([]);
  const [loading, setLoading] = useState(false);

  const deleteSinglePicture = async (photoId: string) => {
    setLoading(true);
    try {
      const updatedPhotos = pictures.filter((photo) => {
        return photo.id !== photoId;
      });
      setPictures(updatedPhotos);
      await AsyncStorage.removeItem('pictures');
      await AsyncStorage.setItem('pictures', JSON.stringify(updatedPhotos));
      Toast.show('Su foto se eliminó correctamente', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor: ColorScheme.SHARE_BUTTON,
        opacity: 1,
      });
    } catch (error) {
      Toast.show('Hubo un error al borrar, por favor intente nuevamente', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor: ColorScheme.DELETE_BUTTON,
        opacity: 1,
      });
    } finally {
      setLoading(false);
    }
  };

  const onSelectedPhoto = (photoId: string | string[]) => {
    return pictures.find((photo) => photo.id === photoId);
  };

  const shareImage = async (uri: string) => {
    try {
      await Sharing.shareAsync(uri);
    } catch (error) {
      Toast.show('Hubo un error al compartir, por favor intente nuevamente', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        backgroundColor: ColorScheme.DELETE_BUTTON,
        opacity: 1,
      });
    }
  };

  const handleShare = async (uri: string | string[]) => {
    const uriToShare = uri.toString();
    await shareImage(uriToShare);
  };

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      try {
        const storedPhotos = await AsyncStorage.getItem('pictures');
        if (storedPhotos) {
          setPictures(JSON.parse(storedPhotos));
        }
      } catch (error) {
        setLoading(false);
        Toast.show(
          'Hubo un error al cargar las fotos, por favor intente nuevamente',
          {
            duration: Toast.durations.SHORT,
            position: Toast.positions.TOP,
            backgroundColor: ColorScheme.DELETE_BUTTON,
            opacity: 1,
          }
        );
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, []);

  return {
    pictures,
    onSelectedPhoto,
    handleShare,
    setPictures,
    deleteSinglePicture,
    loading,
  };
};

export default usePictures;
