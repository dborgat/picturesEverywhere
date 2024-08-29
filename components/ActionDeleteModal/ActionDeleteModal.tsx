import useFotos from '@/hooks/usePictures';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Modal, Text, Pressable, StyleSheet, Image } from 'react-native';
import stylesModal from './ActionDeleteModal.styles';
const ActionShareOrDeleteModal = ({
  setModalVisible,
  modalVisible,
  children,
  onDelete,
  uri,
}: any) => {
  const {
    modalContent,
    titleContainer,
    title,
    button,
    buttonClose,
    textStyle,
    image,
    pressableContainer,
    imageContainer,
    buttonOpen,
  } = stylesModal;

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={modalContent}>
        <View style={titleContainer}>
          <Text style={title}>¿Desea eliminar esta foto?</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <MaterialIcons name='close' color='#fff' size={22} />
          </Pressable>
        </View>
        {children}
        <View style={imageContainer}>
          <Image source={{ uri }} style={image} />
        </View>
        <View style={pressableContainer}>
          <Pressable
            style={[button, buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
              onDelete();
            }}
          >
            <Text style={textStyle}>Si</Text>
          </Pressable>
          <Pressable
            style={[button, buttonOpen]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={textStyle}>No</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ActionShareOrDeleteModal;
