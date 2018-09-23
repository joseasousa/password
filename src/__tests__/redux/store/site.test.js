import reducer,
{ Creators as SiteActions }
  from '../../../redux/store/site';

const INITIAL_STATE = {
  site: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

describe('Site Redux', () => {
  it('should request to create a Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteRequest(),
    );

    expect(state.isSaving).toBe(true);
  });

  it('shoud request success to create a Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteSuccess([
        { id: 1, name: 'test' },
      ]),
    );

    expect(state.site).toHaveLength(1);
  });

  it('shoud request error to create a Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteFailure('error'),
    );

    expect(state.errorMessage).toBe('error');
  });

  it('should request a Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.siteRequest(),
    );

    expect(state.loading).toBe(true);
  });

  it('should success to Request Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.createSiteSuccess([{ id: 1, name: 'test' }]),
    );

    expect(state.site).toHaveLength(1);
  });

  it('shoud error to Request Site', () => {
    const state = reducer(
      INITIAL_STATE,
      SiteActions.siteFailure('error'),
    );

    expect(state.errorMessage).toBe('error');
  });
});
