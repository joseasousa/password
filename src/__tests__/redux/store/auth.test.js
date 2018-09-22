import reducer, { Creators as AuthActions } from '../../../redux/store/auth';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

describe('Auth Redux', () => {
  it('should request', () => {
    const state = reducer(INITIAL_STATE, AuthActions.createAuthRequest());

    expect(state.loading).toBe(true);
  });


  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      AuthActions.createAuthSuccess([{ id: 1, name: 'test' }]),
    );

    expect(state.user).toHaveLength(1);
  });

  it('shoud request success', () => {
    const state = reducer(INITIAL_STATE, AuthActions.createAuthFailure('error'));

    expect(state.errorMessage).toBe('error');
  });

  it('should request login', () => {
    const state = reducer(INITIAL_STATE, AuthActions.loginRequest({
      email: 'email@mail.com',
      password: '1234',
    }));

    expect(state.isSaving).toBe(true);
  });

  it('should login success', () => {
    const state = reducer(INITIAL_STATE, AuthActions.loginSuccess([{
      email: 'email@mail.com',
      password: '1234',
    }]));

    expect(state.user).toHaveLength(1);
  });

  it('should login failure', () => {
    const state = reducer(INITIAL_STATE, AuthActions.loginFailure('error'));

    expect(state.errorMessage).toBe('error');
  });
});
