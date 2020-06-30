import { SET_CURRENT_USER } from "../actionsTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      //!! means Boolean()
      return { isAuthenticated: !!Object.keys(action.user), user: action.user };

    default:
      return state;
  }
};