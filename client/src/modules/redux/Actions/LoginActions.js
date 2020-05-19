import {
  LOGIN_CHECK,
  REGISTER_DATA,
  LOGIN_FORM_LOAD,
} from "../Constants/LoginConstants";

export function loginCheck(data) {
  return { type: LOGIN_CHECK, payload: data };
}

export function registerData(data) {
  return { type: REGISTER_DATA, payload: data };
}

export function loginFormLoad(data) {
  return { type: LOGIN_FORM_LOAD, payload: data };
}