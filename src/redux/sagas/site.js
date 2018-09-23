import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import db from '../../services/db';

import { Creators as ActionCreator } from '../store/site';


export function* storeSite(action) {
  try {
    const { site } = action;

    yield db.table('sites').add(site);
    yield put(ActionCreator.createSiteSuccess(site));
    yield put(push('/'));
  } catch (err) {
    yield put(ActionCreator.createSiteFailure(err));
  }
}

export function* getAllSites() {
  try {
    const resul = yield db.table('sites').toArray();


    yield put(ActionCreator.siteSuccess(resul));
  } catch (err) {
    yield put(ActionCreator.siteFailure(err));
  }
}
