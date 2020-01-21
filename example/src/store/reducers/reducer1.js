import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: ""
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_POSTS: {
      return {
        ...state,
        posts: action.post
      };
    }
    // case actionTypes.UPDATE_STATE: {
    //   const key = action.key;
    //   return {
    //     ...state,
    //     [key]: action.value
    //   };
    // }
    default: {
      return state;
    }
  }
};
export default Reducer1;
