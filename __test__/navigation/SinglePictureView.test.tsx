import { render, fireEvent } from '@testing-library/react-native';
import SinglePictureCard from '@/components/SinglePictureCard/SinglePictureCard';

const mockPush = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

test('navega correctamente al tocar el componente', () => {
  const { getByTestId } = render(
    <SinglePictureCard
      uri='asd'
      id='123'
      deleteSinglePicture={() => {}}
      handleShare={() => {}}
    />
  );

  fireEvent.press(getByTestId('nav-to-details'));
  expect(mockPush).toHaveBeenCalledWith({
    pathname: '/PictureDetailsScreen/PictureDetailsScreen',
    params: { photoId: '123' },
  });
});
