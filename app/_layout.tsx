import { CameraEmoji } from '@/components/CameraEmoji';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          title: 'Pictures-Everywhere',
          headerTitleAlign: 'center',
          statusBarColor: '#f4511e',
          headerLeft: () => <CameraEmoji />,
        }}
      />
      <Stack.Screen
        name='TakePicture'
        options={{
          title: '',
          statusBarColor: '#f4511e',
        }}
      />
      <Stack.Screen
        name='SinglePhotoView'
        options={{
          title: '',
          statusBarColor: '#000',
        }}
      />
    </Stack>
  );
}
