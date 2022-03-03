import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../reducer/user";

function signupAPI(data) {
  return axios.post("/user/signup", data);
}
function* signup(action) {
  try {
    const res = yield call(signupAPI, action.data);
    console.log(res);
    yield put({
      type: SIGNUP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}
function loginAPI(data) {
  return axios.post("http://localhost:3065/user/login", data);
}
function* login(action) {
  try {
    const res = yield call(loginAPI, action.data);
    console.log(res);
    yield put({
      type: LOGIN_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}
function* logIn() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(signUp), fork(logIn)]);
}
