import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    homeScreenArticles: [
        {
            id: 1,
            imageUrl:  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*',
            title: 'Skin care and lotions',
            content: 'Skin care and lotions dsv  ffdscf  hdfoiu'
        },
        {
            id: 2,
            imageUrl:  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*',
            title: 'Skin care and lotions',
            content: 'Skin care and lotions dsv  ffdscf  hdfoiu'
        },
        {
            id: 3,
            imageUrl:  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*',
            title: 'Skin care and lotions',
            content: 'Skin care and lotions dsv  ffdscf  hdfoiu'
        },
        {
            id: 4,
            imageUrl:  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*',
            title: 'Skin care and lotions',
            content: 'Skin care and lotions dsv  ffdscf  hdfoiu'
        },
        {
            id: 5,
            imageUrl:  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
                'images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*',
            title: 'Skin care and lotions',
            content: 'Skin care and lotions dsv  ffdscf  hdfoiu'
        }
    ]
}

const articles = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        removeArticle: (state, action) => {
            let articleIndex = state.homeScreenArticles.findIndex(article => article.id === action.payload.id)
            console.log('articleIndex', articleIndex)
            console.log('removed',  state.homeScreenArticles.splice(articleIndex, 1))
        }
    }
})

export const selectArticles = state => state.articles.homeScreenArticles
export const { removeArticle } = articles.actions
export default articles.reducer
