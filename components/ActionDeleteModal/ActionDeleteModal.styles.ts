import { ColorScheme } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const stylesModal = StyleSheet.create({
    modalContent: {
        height: '50%',
        width: '100%',
        backgroundColor: ColorScheme.MODAL_BACKGROUND,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        alignContent: 'center',
    },
    titleContainer: {
        height: '10%',
        backgroundColor: ColorScheme.CAMERA_BUTTON,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: ColorScheme.BACKGROUND,
        fontSize: 18,
    },
    button: {
        borderRadius: 10,
        width: 100,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
    },
    buttonOpen: {
        backgroundColor: ColorScheme.CAMERA_BUTTON,
    },
    buttonClose: {
        backgroundColor: ColorScheme.DELETE_BUTTON,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: 200,
        height: 220,
        borderRadius: 10,
    },
    pressableContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
});

export default stylesModal;