import { all, takeLatest } from 'redux-saga/effects';

import { createProfile, login } from './auth';

import { Types as AuthTypes } from '../store/auth';

export default function* rootSaga() {
  return yield all([
    takeLatest(
      AuthTypes.CREATE_AUTH_REQUEST,
      createProfile,
    ),
    takeLatest(
      AuthTypes.LOGIN_REQUEST,
      login,
    ),
  ]);
}
