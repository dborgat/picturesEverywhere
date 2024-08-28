import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';

const usePictures = () => {
  const [pictures, setPictures] = useState<
    { id: string; uri: any; location: { latitude: any; longitude: any } }[]
  >([]);

  const deleteSinglePhoto = async (photoId: string) => {
    const updatedPhotos = pictures.filter((photo, index) => {
      return photo.id !== photoId;
    });
    setPictures(updatedPhotos);
    await AsyncStorage.removeItem('pictures');
    await AsyncStorage.setItem('pictures', JSON.stringify(updatedPhotos));
  };

  const deleteAllPhotos = async () => {
    try {
      await AsyncStorage.removeItem('photos');
      setPictures([]);
    } catch (error) {
      console.error('Error deleting all pictures:', error);
    }
  };

  const onSelectedPhoto = (photoId: string | string[]) => {
    return pictures.find((photo) => photo.id === photoId);
  };

  const shareImage = async (uri: string) => {
    try {
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleShare = async (uri: string | string[]) => {
    const uriToShare = uri.toString();
    await shareImage(uriToShare);
  };

  useEffect(() => {
    const loadPhotos = async () => {
      const storedPhotos = await AsyncStorage.getItem('pictures');
      if (storedPhotos) {
        setPictures(JSON.parse(storedPhotos));
      }
    };
    loadPhotos();
  }, []);

  return {
    deleteAllPhotos,
    pictures,
    onSelectedPhoto,
    handleShare,
    setPictures,
    deleteSinglePhoto,
  };
};

export default usePictures;
