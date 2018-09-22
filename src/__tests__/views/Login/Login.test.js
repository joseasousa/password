import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { Creators as AuthCreators } from '../../../redux/store/auth';

import Login from '../../../views/Login';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

const mockStore = createMockStore();
const store = mockStore({
  auth: INITIAL_STATE,
});

describe('<Login />', () => {
  it('should render', () => {
    const wrapper = shallow(<Login />, { context: { store } });
  });
});
