import { Ionicons } from '@expo/vector-icons';
import { ColorScheme } from './Colors';

export const ICONS = {
  share: (
    <Ionicons
      name='share-social-sharp'
      size={22}
      color={ColorScheme.BACKGROUND}
    />
  ),
  delete: (
    <Ionicons name='trash-bin-sharp' size={22} color={ColorScheme.BACKGROUND} />
  ),
  openCamera: (
    <Ionicons name='camera' color={ColorScheme.BACKGROUND} size={40} />
  ),
};
