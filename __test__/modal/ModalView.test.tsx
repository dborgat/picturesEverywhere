import { render, fireEvent } from '@testing-library/react-native';
import SinglePictureCard from '@/components/SinglePictureCard/SinglePictureCard';
import React from 'react';

test('abre el modal al presionar el botón "Eliminar foto"', () => {
  const { getByText, getByTestId } = render(
    <SinglePictureCard
      uri='test-uri'
      id='123'
      deleteSinglePicture={() => {}}
      handleShare={() => {}}
    />
  );

  fireEvent.press(getByText('Eliminar foto'));

  expect(getByTestId('action-delete-modal')).toBeTruthy();
});
