import { StyleSheet } from "react-native";
import { ColorScheme } from "@/constants/Colors";

const styles = StyleSheet.create({
    mainContainer: { flex: 1, padding: 20, backgroundColor: ColorScheme.BACKGROUND },
    flatListColumnWrapper: { justifyContent: "space-between" },
    flatListContentContainer: { paddingBottom: 5 },
    itemSeparator: { height: 10 },
    cameraButtonStyle: {
        backgroundColor: ColorScheme.CAMERA_BUTTON,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyListText: { color: ColorScheme.CAMERA_BUTTON, fontWeight: 'bold', fontSize: 25 }
});

export default styles;
