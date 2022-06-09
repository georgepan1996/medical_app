import {createSlice} from "@reduxjs/toolkit";
import {db} from '../../../firebase'

const initialState = {
    homeScreenArticles: [
    ]
}

const getArticles = () => {
    console.log('get articles')
    const articlesRef = db.collection('posts')
    return articlesRef.get()
}

const articles = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        removeArticle: (state, action) => {
            let articleIndex = state.homeScreenArticles.findIndex(article => article.id === action.payload.id)
            console.log('articleIndex', articleIndex)
            console.log('removed',  state.homeScreenArticles.splice(articleIndex, 1))
        },
        addHomeScreenArticles: (state, action) => {
            state.homeScreenArticles.push(...action.payload.articles)
        }
    }
})

export const selectArticles = state => state.articles.homeScreenArticles
export const { removeArticle, addHomeScreenArticles } = articles.actions
export { getArticles }
export default articles.reducer
