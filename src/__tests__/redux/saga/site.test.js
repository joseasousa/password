import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import rootSaga from '../../../redux/sagas';
import api from '../../../services/api';

import {
  Types as SiteTypes,
  Creators as SiteActions,
} from '../../../redux/store/site';

const apiMock = new MockAdapter(api);

const post = {
  email: 'email@mail.com',
  name: 'name',
  password: 'password',
};

describe('Site Sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should create a Site', async () => {
    apiMock.onPost('register').reply(200, post);

    sagaTester.dispatch(
      SiteActions.createSiteRequest(),
    );

    await sagaTester.waitFor(
      SiteTypes.CREATE_SITE_SUCCESS,
    );

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SiteActions.createSiteSuccess(post),
    );
  });

  it('should not create a Site', async () => {
    apiMock.onPost('register').reply(400, { error: 'error' });

    sagaTester.dispatch(SiteActions.createSiteRequest());

    await sagaTester.waitFor(
      SiteTypes.CREATE_SITE_FAILURE,
    );

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SiteActions.createSiteFailure('error'),
    );
  });
});
