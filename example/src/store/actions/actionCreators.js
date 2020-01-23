import * as actionTypes from './actionTypes'

export const addNewNote = (note) => {
  return {
    type: actionTypes.ADD_NEW_NOTE,
    note: note
  }
}

export const changePosts=(post)=>{
  return {
    type:actionTypes.CHANGE_POSTS,
    post:post
  }
}

export const removeNote=(index)=>{
 return {
   type:actionTypes.REMOVE_NOTE,
   index:index
 }
}