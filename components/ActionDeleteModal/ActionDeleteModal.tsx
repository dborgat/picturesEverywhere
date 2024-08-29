import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Modal, Text, TouchableOpacity, Image } from 'react-native';
import stylesModal from './ActionDeleteModal.styles';
import { ColorScheme } from '@/constants/Colors';
import { ActionShareOrDeleteModalProps } from '@/types';

const ActionDeleteModal = ({
  setModalVisible,
  modalVisible,
  onDelete,
  uri,
}: ActionShareOrDeleteModalProps) => {
  const {
    modalContent,
    titleContainer,
    title,
    button,
    confirmButton,
    textStyle,
    image,
    pressableContainer,
    imageContainer,
    cancelButton,
  } = stylesModal;

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      testID='action-delete-modal'
    >
      <View style={modalContent}>
        <View style={titleContainer}>
          <Text style={title}>¿Desea eliminar esta foto?</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <MaterialIcons
              name='close'
              color={ColorScheme.BACKGROUND}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={imageContainer}>
          <Image source={{ uri }} style={image} />
        </View>
        <View style={pressableContainer}>
          <TouchableOpacity
            style={[button, confirmButton]}
            onPress={() => {
              setModalVisible(!modalVisible);
              onDelete();
            }}
          >
            <Text style={textStyle}>Si</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[button, cancelButton]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={textStyle}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ActionDeleteModal;
