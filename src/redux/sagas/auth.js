import { put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ActionCreator } from '../store/auth';

export function* createProfile(action) {
  const user = yield api.post('/register', action.user);

  if (user.ok) {
    yield put(ActionCreator.createAuthSuccess(user));
  } else {
    yield put(ActionCreator.createAuthFailure(user.data.message));
  }
}

export function* login(action) {
  const user = yield api.post('/login', action.user);

  if (user.ok) {
    yield put(ActionCreator.loginSuccess(user));
  } else {
    yield put(ActionCreator.loginhFailure(user.data.message));
  }
}
