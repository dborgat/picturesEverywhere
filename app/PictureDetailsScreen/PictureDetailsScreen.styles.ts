import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        flex: 1,
        marginBottom: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    containerMap: {
        width: '100%',
        height: '20%',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#000000',
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
    shareIconButton: {
        backgroundColor: '#0e5816',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    shareTextButton: { color: 'white', fontSize: 25 }
});

export default styles;
