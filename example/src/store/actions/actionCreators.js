import * as actionTypes from './actionTypes'

export const addNewBook = (book) => {
  return {
    type: actionTypes.ADD_NEW_BOOK,
    book: book
  }
}

export const updateState=(key,value)=>{
  return {
    type:actionTypes.UPDATE_STATE,
    key:key,
    value:value
  }
}

export const changePosts=(post)=>{
  return {
    type:actionTypes.CHANGE_POSTS,
    post:post
  }
}