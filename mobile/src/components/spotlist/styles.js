import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 15,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
    },

    list: {
        paddingHorizontal: 5,
    },

    listitem: {
        marginRight: 5,
        paddingHorizontal: 5,
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },

    price: {
        fontSize: 15,
        color: '#999'
    },

    button: {
        height: 32,
        backgroundColor: '#fa5a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
        marginBottom: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});