import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  WRITE_POST_FAILURE,
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
} from "../reducer/post";

function writePostAPI(data) {
  return axios.post("/post", data);
}

function* writePost(action) {
  try {
    const res = yield call(writePostAPI, action.data);
    console.log(res);
    yield put({
      type: WRITE_POST_SUCCESS,
      data: res.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WRITE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* WritePost() {
  yield takeLatest(WRITE_POST_REQUEST, writePost);
}

export default function* postSaga() {
  yield all([fork(WritePost)]);
}
