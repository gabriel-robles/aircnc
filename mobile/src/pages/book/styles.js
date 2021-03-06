import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 30,
        marginTop: 80,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 0,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2, 
    },

    button: {
        height: 42,
        backgroundColor: '#fa5a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    cancelbutton: {
        backgroundColor: '#ccc',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});