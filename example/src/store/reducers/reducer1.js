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
    default: {
      return state;
    }
  }
};
export default Reducer1;
