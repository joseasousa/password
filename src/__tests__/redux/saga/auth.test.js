import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import rootSaga from '../../../redux/sagas';
import api from '../../../services/api';

import {
  Types as AuthTypes,
  Creators as AuthActions,
} from '../../../redux/store/auth';

const apiMock = new MockAdapter(api);

const login = {
  email: 'email@mail.com',
  password: 'password',
};

const post = {
  email: 'email@mail.com',
  name: 'name',
  password: 'password',
};

describe('User Sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });


  it('should request to create a user', async () => {
    apiMock.onPost('register').reply(200, post);

    sagaTester.dispatch(AuthActions.createAuthRequest(post));

    await sagaTester.waitFor(AuthTypes.CREATE_AUTH_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      AuthActions.createAuthSuccess(post),
    );
  });

  it('should failure request to create a user', async () => {
    apiMock.onPost('register').reply(400, { error: 'error' });

    sagaTester.dispatch(AuthActions.createAuthRequest(post));

    await sagaTester.waitFor(AuthTypes.CREATE_AUTH_FAILURE);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      AuthActions.createAuthFailure('error'),
    );
  });

  it('should login', async () => {
    apiMock.onPost('login').reply(200, login);

    sagaTester.dispatch(AuthActions.loginRequest(login));

    await sagaTester.waitFor(AuthTypes.LOGIN_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      AuthActions.loginSuccess(login),
    );
  });

  it('should login', async () => {
    apiMock.onPost('login').reply(400, { error: 'error' });

    sagaTester.dispatch(AuthActions.loginRequest(login));

    await sagaTester.waitFor(AuthTypes.LOGIN_FAILURE);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      AuthActions.loginFailure('error'),
    );
  });
});
