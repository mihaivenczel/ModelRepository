import {put, takeLatest, call} from 'redux-saga/effects';
import {LOGIN, LOGIN_SAGA, FETCHING_TOKEN, LOGIN_FAILURE} from '../redux';
import {login} from '../../../api';

//worker saga
function* loginRequest() {
  try {
    let isFetchingToken = true;
    yield put({type: FETCHING_TOKEN, isFetchingToken});
    const response = yield call(login);
    yield put({type: LOGIN, response});
    isFetchingToken = false;
    yield put({type: FETCHING_TOKEN, isFetchingToken});
    return response;
  } catch (error) {
    const isFetchingToken = false;
    yield put({type: FETCHING_TOKEN, isFetchingToken});
    yield put({type: LOGIN_FAILURE, error});
    return null;
  }
}

//watcher saga
export function* watchLogin() {
  yield takeLatest(LOGIN_SAGA, loginRequest);
}
