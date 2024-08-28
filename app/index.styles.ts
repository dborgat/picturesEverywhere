import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: { flex: 1, padding: 20 },
    flatListColumnWrapper: { justifyContent: "space-between" },
    flatListContentContainer: { paddingBottom: 5 },
    itemSeparator: { height: 10 },
    cameraButtonStyle: {
        backgroundColor: '#2f6ec1',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 5,
        width: '100%',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButtonText: { fontSize: 20, fontWeight: 'bold' },
});

export default styles;
