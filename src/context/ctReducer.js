import { GET_RESULT } from "./types";

const CtReducer = (state, action) => {
  switch (action.type) {
    case GET_RESULT:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

export default CtReducer;
