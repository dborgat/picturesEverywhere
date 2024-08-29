import { CameraEmoji } from '@/components/CameraEmoji/CameraEmoji';
import { Stack } from 'expo-router';
import { ColorScheme } from '@/constants/Colors';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function RootLayout() {
  return (
    <RootSiblingParent>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: ColorScheme.NAVBAR,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: ColorScheme.CAMERA_BUTTON,
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'Pictures-Everywhere',
            headerTitleAlign: 'center',
            statusBarColor: ColorScheme.NAVBAR,
            headerLeft: () => <CameraEmoji />,
          }}
        />
        <Stack.Screen
          name='TakePicture/TakePicture'
          options={{
            title: '',
            statusBarColor: ColorScheme.NAVBAR,
          }}
        />
        <Stack.Screen
          name='PictureDetailsScreen/PictureDetailsScreen'
          options={{
            title: '',
            statusBarColor: ColorScheme.NAVBAR,
          }}
        />
      </Stack>
    </RootSiblingParent>
  );
}
