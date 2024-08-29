export interface ActionShareOrDeleteModalProps {
    setModalVisible: (visible: boolean) => void;
    modalVisible: boolean;
    onDelete: () => void;
    uri: string;
}

export interface SinglePictureCardProps {
    uri: string;
    id: string;
    deleteSinglePicture: (id: string) => void;
    handleShare: (uri: string) => void;
}

export interface PicturesProps { id: string; uri: any; location: { latitude: any; longitude: any } }

export interface TouchableOpacityButtonProps {
    title: string;
    icon?: string;
    buttonColor: { backgroundColor: string };
    size?: number;
    onPressAction: () => void;
    testId?: string;
}