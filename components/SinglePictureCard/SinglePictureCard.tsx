import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ActionShareOrDeleteModal from '../ActionDeleteModal/ActionDeleteModal';
import { Ionicons } from '@expo/vector-icons';
import styles from './SinglePictureCard.styles';
import { ColorScheme } from '@/constants/Colors';

const SinglePictureCard = ({
  uri,
  id,
  deleteSinglePicture,
  handleShare,
}: any) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    container,
    image,
    buttonsContainer,
    shareButton,
    deleteButton,
    actionButtons,
  } = styles;

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
          <TouchableOpacity
            onPress={() => handleShare(uri)}
            style={[actionButtons, shareButton]}
          >
            <Ionicons
              name='share-social-sharp'
              size={22}
              color={ColorScheme.BACKGROUND}
            />
            <Text style={{ color: ColorScheme.BACKGROUND, fontWeight: 'bold' }}>
              Compartir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[deleteButton, actionButtons]}
          >
            <Ionicons
              name='trash-bin-sharp'
              size={22}
              color={ColorScheme.BACKGROUND}
            />
            <Text style={{ color: ColorScheme.BACKGROUND, fontWeight: 'bold' }}>
              Eliminar foto
            </Text>
          </TouchableOpacity>
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
