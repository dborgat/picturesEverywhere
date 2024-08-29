import React, { useState } from 'react';
import { View, Image, Pressable, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import ActionShareOrDeleteModal from '../ActionDeleteModal/ActionDeleteModal';
import { Ionicons } from '@expo/vector-icons';
import styles from './SinglePictureCard.styles';

const SinglePictureCard = ({
  uri,
  id,
  deleteSinglePhoto,
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
        <Pressable
          style={{ overflow: 'hidden' }}
          onPress={() =>
            router.push({
              pathname: '/PictureDetailsScreen/PictureDetailsScreen',
              params: { photoId: id },
            })
          }
        >
          <Image source={{ uri }} style={image} />
        </Pressable>
        <View style={buttonsContainer}>
          <Pressable
            onPress={() => handleShare(uri)}
            style={[actionButtons, shareButton]}
          >
            <Ionicons name='share-social-sharp' size={22} color='#ffffff' />
            <Text style={{ color: 'white' }}>Compartir</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={[deleteButton, actionButtons]}
          >
            <Ionicons name='trash-bin-sharp' size={22} color='#00000094' />
            <Text>Eliminar foto</Text>
          </Pressable>
        </View>
      </View>
      <ActionShareOrDeleteModal
        onDelete={() => deleteSinglePhoto(id)}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        uri={uri}
      />
    </>
  );
};

export default SinglePictureCard;
