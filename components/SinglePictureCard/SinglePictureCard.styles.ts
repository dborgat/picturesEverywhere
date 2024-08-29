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
        backgroundColor: '#a7a7a752',
        gap: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    shareButton: {
        backgroundColor: '#0e5816',
    },
    deleteButton: {
        backgroundColor: '#ef5252',
    },
    actionButtons: {
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        width: 150,
        gap: 20,
    },
});

export default styles;
