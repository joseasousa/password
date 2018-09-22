import { put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ActionCreator } from '../store/auth';

export function* createProfile(action) {
  try {
    const user = yield api.post('/register', action.user);

    yield put(ActionCreator.createAuthSuccess(user.data));
  } catch (err) {
    yield put(ActionCreator.createAuthFailure(err.response.data.error));
  }
}

export function* login(action) {
  try {
    const user = yield api.post('/login', action.user);

    yield put(ActionCreator.loginSuccess(user.data));
  } catch (err) {
    yield put(ActionCreator.loginFailure(err.response.data.error));
  }
}
