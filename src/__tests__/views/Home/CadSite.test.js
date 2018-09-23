import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';

import CadSite from '../../../views/Home/CadSite';

const INITIAL_STATE = {
  user: null,
  token: '',
  site: '',
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
