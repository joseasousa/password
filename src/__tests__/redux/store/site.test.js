import reducer,
{ Creators as SiteActions }
  from '../../../redux/store/site';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

describe('Site Redux', () => {
  it('should request', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteRequest(),
    );

    expect(state.isSaving).toBe(true);
  });

  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteSuccess([
        { id: 1, name: 'test' },
      ]),
    );

    expect(state.user).toHaveLength(1);
  });

  it('shoud request success', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteFailure('error'),
    );

    expect(state.errorMessage).toBe('error');
  });
});
