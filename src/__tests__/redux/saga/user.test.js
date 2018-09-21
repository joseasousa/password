import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import rootSaga from '../../../redux/sagas';
import api from '../../../services/api';

import {
  Types as UserTypes,
  Creators as UserActions,
} from '../../../redux/store/auth';

const apiMock = new MockAdapter(api);

const result = [
  { id: 1, text: 'teste' },
  { id: 2, text: 'teste2' },
  { id: 3, text: 'teste3' },
];

const post = result[1];
describe('User Sagas', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should be render', async () => {
    apiMock.onGet('users').reply(200, result);

    sagaTester.dispatch(UserActions.userRequest());

    await sagaTester.waitFor(UserTypes.USER_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      UserActions.userSuccess(result),
    );
  });

  it('should not be render', async () => {
    apiMock.onGet('users').reply(400, 'error');

    sagaTester.dispatch(UserActions.userRequest());

    await sagaTester.waitFor(UserTypes.USER_FAILURE);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      UserActions
        .userFailure('Request failed with status code 400'),
    );
  });

  it('should request to create a user', async () => {
    apiMock.onPost('users').reply(200, post);

    sagaTester.dispatch(UserActions.createUserRequest(post));

    await sagaTester.waitFor(UserTypes.CREATE_USER_SUCCESS);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(UserActions.createUserSuccess(post));
  });
});
