import { StyleSheet, Platform } from 'react-native';

const primaryColor = '#5091ee'
export default StyleSheet.create({

    container: {
        height: '100%'
    },
    header: {
        backgroundColor: primaryColor,
        height: '10%',
        display: 'flex',
        alignItems: 'flex-end',
        paddingHorizontal: '1%',
        paddingBottom: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIconsLeft: {
    },
    headerIconsRight: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerIcon: {
        paddingHorizontal: '3%',
    },
    section: {
        backgroundColor: '#FFF',
        height: '80%'
    },
    footer: {
        backgroundColor: primaryColor,
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: '1%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})