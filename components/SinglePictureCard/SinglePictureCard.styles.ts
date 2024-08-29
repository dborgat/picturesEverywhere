import { ColorScheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { borderRadius: 10 },
    image: {
        width: 165,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonsContainer: {
        padding: 10,
        width: 165,
        backgroundColor: ColorScheme.CAMERA_BUTTON,
        gap: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    shareButton: {
        backgroundColor: ColorScheme.SHARE_BUTTON,
    },
    deleteButton: {
        backgroundColor: ColorScheme.DELETE_BUTTON,
    },
    actionButtons: {
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        width: 150,
        gap: 20,
    },
});

export default styles;
