import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import HomeScreenStyles from "../../../styles/HomeScreenStyles";


const SectionArticle = (props) => {
    return (
        <View style={HomeScreenStyles.sectionArticle}>
            <Image
                style={HomeScreenStyles.articleImage}
                source={{uri: props.imageUrl}}
            />
            <View style={HomeScreenStyles.articleDescription}>
                <Text style={HomeScreenStyles.articleTitle}>{props.title} </Text>
                <Text style={HomeScreenStyles.articleContent}>{props.content} </Text>
            </View>
        </View>
    )
}

export default SectionArticle