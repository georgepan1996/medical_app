import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {auth, db} from '../../../firebase';
import HomeScreenStyles from "../../styles/HomeScreenStyles";
import Icon from '../../styles/icons';

const iconSize = 25
const iconColor = '#fff'
const homeIconText = 'Home'
const statsIconText = 'Stats'
const newIconText = 'New'
const patientsIconText = 'Patients'
const profileIconText = 'Profile'


const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [perms, setPerms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (auth.currentUser) {
            const docRef = db.collection('users').doc(auth.currentUser.uid);
            docRef.get().then((results) => {
                const data = results.data();
                setData(data);

                const docRefforPerms = db
                    .collection('roles')
                    .where('roleId', '==', data.roleId);
                docRefforPerms.get().then((queryResult) => {
                    queryResult.forEach((doc) => {
                        const roleData = doc.data();
                        setPerms(roleData.perms[0].actions);
                    });
                });
                setLoading(false);
            });
        } else {
        }
    }, []);

    return (
        <View style={HomeScreenStyles.container}>
            <View style={HomeScreenStyles.header}>
                <View style={HomeScreenStyles.headerIconsLeft}>
                    <Icon.FontAwesome
                        name='pencil'
                        color={iconColor}
                        style={HomeScreenStyles.headerIcon}
                        size={iconSize}
                    >
                    </Icon.FontAwesome>
                </View>
                <View style={HomeScreenStyles.headerIconsRight}>
                    <Icon.FontAwesome
                        name='bell'
                        color={iconColor}
                        style={HomeScreenStyles.headerIcon}
                        size={iconSize}
                    >
                    </Icon.FontAwesome>
                    <Icon.Feather
                        name='message-square'
                        color={iconColor}
                        style={HomeScreenStyles.headerIcon}
                        size={iconSize}
                    >
                    </Icon.Feather>
                </View>
            </View>
            <View style={HomeScreenStyles.section}>
                <Text>dsj</Text>
            </View>
            <View style={HomeScreenStyles.footer}>
                <View
                    style={HomeScreenStyles.headerIcon}
                >
                    <Icon.Feather
                        name='home'
                        color={iconColor}
                        size={iconSize}
                    >
                    </Icon.Feather>
                    <Text>{homeIconText}</Text>
                </View>
                <Icon.Ionicons
                    name='stats-chart'
                    color={iconColor}
                    style={HomeScreenStyles.headerIcon}
                    size={iconSize}
                >
                </Icon.Ionicons>
                <Icon.Feather
                    name='plus-circle'
                    color='#fff'
                    style={HomeScreenStyles.headerIcon}
                    size={iconSize}
                >
                </Icon.Feather>
                <Icon.Feather
                    name='list'
                    color={iconColor}
                    style={HomeScreenStyles.headerIcon}
                    size={iconSize}
                >
                </Icon.Feather>
                <Icon.Ionicons
                    name='person'
                    color={iconColor}
                    style={HomeScreenStyles.headerIcon}
                    size={iconSize}
                >
                </Icon.Ionicons>
            </View>
        </View>
        // <View style={HomeScreenStyles.screen}>
        //     {loading ? (
        //         <ActivityIndicator
        //             size='large'
        //             visible={loading}
        //             textContent={'Loading...'}
        //         />
        //     ) : (
        //
        //     )}
        // </View>
    );
};

export default HomeScreen;
