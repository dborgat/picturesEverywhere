import { ColorScheme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: ColorScheme.BACKGROUND,
    },
    image: {
        width: '100%',
        flex: 1,
        marginBottom: 20,
        borderRadius: 20,
    },
   
    containerMap: {
        width: '100%',
        height: '20%',
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
    shareIconButton: {
        backgroundColor: ColorScheme.SHARE_BUTTON,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    shareTextButton: { color: ColorScheme.BACKGROUND, fontSize: 25 }
});

export default styles;
