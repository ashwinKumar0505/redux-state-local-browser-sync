import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: [],
  posts: ""
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_BOOK: {
      return {
        ...state,
        books: [...state.books, action.book]
      };
    }
    case actionTypes.CHANGE_POSTS: {
      return {
        ...state,
        posts: action.post
      };
    }
    case actionTypes.UPDATE_STATE: {
      const key = action.key;
      return {
        ...state,
        [key]: action.value
      };
    }
    default: {
      return state;
    }
  }
};
export default Reducer;
