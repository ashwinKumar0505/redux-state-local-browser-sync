import * as actionTypes from "../actions/actionTypes";

const initialState = {
  notes: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_NOTE: {
      if (state.notes.length > 0) {
        return {
          ...state,
          notes: [...state.notes, action.note]
        };
      } else {
        return {
          ...state,
          notes: [action.note]
        };
      }
    }
    case actionTypes.REMOVE_NOTE: {
      const newNotes = state.notes.filter((note, index) => {
        if (index !== action.index) {
          return note;
        }
        return null
      });

      return {
        ...state,
        notes: newNotes
      };
    }
    default: {
      return state;
    }
  }
};
export default Reducer;
