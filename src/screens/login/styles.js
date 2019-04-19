import { StyleSheet } from 'react-native'

const styles = StyleSheet.create(
{
    container :
    {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: '#363636',
        paddingHorizontal: 30,
    },
    input:
    {
        height: 40,
        borderWidth: 1,
        borderColor: '#696969',
        backgroundColor: '#FFF',
        borderRadius: 20,
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    button:
    {
        height: 40,
        borderRadius: 20,
        width: '30%',
        backgroundColor: '#4169E1',
        marginTop: 10,
    },
    buttonText:
    {
        marginTop: 10,
        height: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF'
    }

})

export default styles