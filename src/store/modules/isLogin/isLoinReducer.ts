import { LOGIN, LOGOUT } from "./isLoginAction";

const initialState = {
  isLoginned: false,
};

export const isLoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoginned: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLoginned: false,
      };

    default:
      return state;
  }
};
