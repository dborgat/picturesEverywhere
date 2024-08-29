import { ColorScheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: ColorScheme.BACKGROUND,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
        color: ColorScheme.CAMERA_BUTTON,
        fontSize: 20,
        fontWeight: 'bold',
    },
    camera: {
        flex: 1,
        flexDirection: 'column-reverse',
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
    },
});

export default styles;