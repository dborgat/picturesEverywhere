import { StyleSheet } from 'react-native';

const stylesModal = StyleSheet.create({
    modalContent: {
        height: '50%',
        width: '100%',
        backgroundColor: '#5278a6',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        alignContent: 'center',
    },
    titleContainer: {
        height: '10%',
        backgroundColor: '#6aa1f3',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#c7b4c4',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        width: '60%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    button: {
        borderRadius: 10,
        width: 100,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
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