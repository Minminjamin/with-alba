import { LOGIN, LOGOUT } from "./isLoginAction";

const initialState = {
  isLogin: false,
};

export const isLoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};
