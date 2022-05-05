import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {auth, db} from '../../../../firebase';
import HomeScreenStyles from "../../../styles/HomeScreenStyles";
import Icon from '../../../styles/icons';
import SectionDataContentItem from "./SectionDataContentItem";
import SectionArticle from "./SectionArticle";


//theme
//bar
const barIconSize = 25
const barIconColor = '#fff'
//section data
const sectionDataTitleIconColor = '#838383'
const sectionDataTitleIconSize = 15

//strings for converting(e.g to be translated)
const homeIconText = 'Home'
const statsIconText = 'Stats'
const newIconText = 'New'
const patientsIconText = 'Patients'
const profileIconText = 'Profile'

//other comments
    //article must have a limit of characters for title and description

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
            <View style={[HomeScreenStyles.header, HomeScreenStyles.bar]}>
                <View style={HomeScreenStyles.barIconsLeft}>
                    <Icon.FontAwesome
                        name='pencil'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}

                    >
                    </Icon.FontAwesome>
                </View>
                <View style={HomeScreenStyles.barIconsRight}>
                    <Icon.FontAwesome
                        name='bell'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.FontAwesome>
                    <Icon.Feather
                        name='message-square'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                </View>
            </View>
            <View style={HomeScreenStyles.section}>
                <View style={HomeScreenStyles.sectionData}>

                </View>
                <View style={HomeScreenStyles.sectionData}>
                    <View style={HomeScreenStyles.sectionDataTitleWithIcon}>
                        <Text style={HomeScreenStyles.sectionDataTitle}>
                            Quick facts
                        </Text>
                        <Icon.Ionicons
                            name='settings-sharp'
                            color={sectionDataTitleIconColor}
                            style={HomeScreenStyles.sectionDataTitleIconRight}
                            size={sectionDataTitleIconSize}
                        >
                        </Icon.Ionicons>
                    </View>

                    <View style={HomeScreenStyles.sectionDataContent}>
                        <SectionDataContentItem itemDescription={'Active patients'} itemData={27} />
                        <SectionDataContentItem itemDescription={'Active therapies'} itemData={14} />
                        <SectionDataContentItem itemDescription={'°C'} itemData={18} />
                        <SectionDataContentItem itemDescription={'UV'} itemData={2} />
                        <SectionDataContentItem itemDescription={'Humidity'} itemData={24} />
                    </View>

                </View>

                <ScrollView style={HomeScreenStyles.sectionArticles}>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions dsv  ffdscf  hdfoiu'}
                    >
                    </SectionArticle>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions ds  ffdsfs dfsdfsdfsd'}
                    >
                    </SectionArticle>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions dsf fds fsdfsd  sfsdfsd'}
                    >
                    </SectionArticle>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions dsf fds fsdfsd  sfsdfsd'}
                    >
                    </SectionArticle>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions dsf fds fsdfsd  sfsdfsd'}
                    >
                    </SectionArticle>
                    <SectionArticle
                        imageUrl={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                        'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'}
                        title={'Skin care and lotions'}
                        content={'Skin care and lotions dsf fds fsdfsd  sfsdfsd'}
                    >
                    </SectionArticle>
                </ScrollView>
            </View>
            <View style={[HomeScreenStyles.footer, HomeScreenStyles.bar]}>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Feather
                        style={HomeScreenStyles.barIcon}
                        name='home'
                        color={barIconColor}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                    <Text style={HomeScreenStyles.barIconText}>{homeIconText}</Text>
                </View>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Ionicons
                        name='stats-chart'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Ionicons>
                    <Text style={HomeScreenStyles.barIconText}>{statsIconText}</Text>
                </View>
                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Feather
                        name='plus-circle'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                    <Text style={HomeScreenStyles.barIconText}>{newIconText}</Text>
                </View>

                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Feather
                        name='list'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Feather>
                    <Text style={HomeScreenStyles.barIconText}>{patientsIconText}</Text>
                </View>

                <View
                    style={HomeScreenStyles.barIconWithText}
                >
                    <Icon.Ionicons
                        name='person'
                        color={barIconColor}
                        style={HomeScreenStyles.barIcon}
                        size={barIconSize}
                    >
                    </Icon.Ionicons>
                    <Text style={HomeScreenStyles.barIconText}>{profileIconText}</Text>
                </View>

            </View>
        </View>
    );
};

export default HomeScreen;
