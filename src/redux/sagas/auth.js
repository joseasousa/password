import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../services/api';

import { Creators as ActionCreator } from '../store/auth';

export function* createProfile(action) {
  try {
    const result = yield api.post('/register', action.user);

    localStorage.setItem('token', result.data.token);

    yield put(ActionCreator.createAuthSuccess(result.data));
    yield put(push('/'));
  } catch (err) {
    yield put(ActionCreator.createAuthFailure(err.response.data.error));
  }
}

export function* login(action) {
  try {
    const result = yield api.post('/login', action.user);

    localStorage.setItem('token', result.data.token);

    yield put(ActionCreator.loginSuccess(result.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(ActionCreator.loginFailure(err.response.data.error));
  }
}

export function* auth() {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      yield put(ActionCreator.authSuccess(token));
    } catch (err) {
      yield put(push('/login'));
      yield put(ActionCreator.authFailure(`invalid token: ${err}`));
    }
  } else {
    yield put(push('/login'));
    yield put(ActionCreator.authFailure('erro'));
  }
}
