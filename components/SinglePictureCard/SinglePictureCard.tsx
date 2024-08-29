import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ActionShareOrDeleteModal from '../ActionDeleteModal/ActionDeleteModal';
import { Ionicons } from '@expo/vector-icons';
import styles from './SinglePictureCard.styles';
import { ColorScheme } from '@/constants/Colors';
import TouchableOpacityButton from '../TouchableOpacityButton/TouchableOpacityButton';

const SinglePictureCard = ({
  uri,
  id,
  deleteSinglePicture,
  handleShare,
}: any) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const { container, image, buttonsContainer, shareButton, deleteButton } =
    styles;

  return (
    <>
      <View style={container}>
        <TouchableOpacity
          style={{ overflow: 'hidden' }}
          onPress={() =>
            router.push({
              pathname: '/PictureDetailsScreen/PictureDetailsScreen',
              params: { photoId: id },
            })
          }
        >
          <Image source={{ uri }} style={image} />
        </TouchableOpacity>
        <View style={buttonsContainer}>
          <TouchableOpacityButton
            title='Compartir'
            icon='share'
            onPressAction={() => handleShare(uri)}
            buttonColor={shareButton}
          />
          <TouchableOpacityButton
            title='Eliminar foto'
            icon='delete'
            onPressAction={() => setModalVisible(true)}
            buttonColor={deleteButton}
          />
        </View>
      </View>
      <ActionShareOrDeleteModal
        onDelete={() => deleteSinglePicture(id)}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        uri={uri}
      />
    </>
  );
};

export default SinglePictureCard;
