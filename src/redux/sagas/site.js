import { put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ActionCreator } from '../store/site';

export function* storeSite(action) {
  try {
    const user = yield api.post('/register', action.user);

    yield put(ActionCreator.createSiteSuccess(user.data));
  } catch (err) {
    yield put(ActionCreator.createSiteFailure(err.response.data.error));
  }
}
