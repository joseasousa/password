import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { Creators as AuthCreators } from '../../../redux/store/auth';

import CadSite from '../../../views/Home/CadSite';

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

describe('<CadSite />', () => {
  it('should render', () => {
    const wrapper = shallow(<CadSite />, { context: { store } });
  });
});
