import { put } from 'redux-saga/effects';

import { Creators as ActionCreator } from '../store/auth';

export function* storeSite(action) {
  const user = yield api.post('/register', action.user);

  if (user.ok) {
    yield put(ActionCreator.createSiteSuccess(user));
  } else {
    yield put(ActionCreator.createSiteFailure(user.data.message));
  }
}
