import reducer, { Creators as AuthActions } from '../../../redux/store/auth';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

describe('Todo User', () => {
  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      AuthActions.createSuccess([{ id: 1, name: 'test' }]),
    );

    expect(state.data).toHaveLength(1);
  });

  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      AuthActions.createFailure('error'),
    );

    expect(state.error).toBe('error');
  });

  it('should create user', () => {
    const state = reducer(
      INITIAL_STATE,
      AuthActions.create({ id: 1, name: 'test' }),
    );

    expect(state.data.id).toBe(1);
  });
});
