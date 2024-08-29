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
    },
    camera: {
        flex: 1,
        flexDirection: 'column-reverse',
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
    iconCameraStyle: { backgroundColor: ColorScheme.BACKGROUND, borderRadius: 100 }
});

export default styles;