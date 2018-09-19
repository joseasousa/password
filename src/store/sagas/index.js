import { all, takeLatest } from 'redux-saga/effects'

import { Types as PeopleTypes } from '../ducks/people'

import { getPeople } from './people'

export default function * rootSaga () {
  return yield all([
    takeLatest(PeopleTypes.GET_REQUEST, getPeople)
  ])
}
