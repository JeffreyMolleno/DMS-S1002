import {
  LOGIN_CHECK,
  REGISTER_DATA,
  LOGIN_FORM_LOAD,
} from "../Constants/LoginConstants";

const initialState = {};

export default function LoginFrom(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CHECK:
      return null;
    case REGISTER_DATA:
      return null;
    case LOGIN_FORM_LOAD:
      return null;
    default:
      return null;
  }
}
