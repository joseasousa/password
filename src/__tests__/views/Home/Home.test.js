import React from 'react';
import { shallow } from 'enzyme';
import createMockStore from 'redux-mock-store';
import { Creators as AuthCreators } from '../../../redux/store/auth';

import Home from '../../../views/Home';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
  isSaving: false,
  saved: false,
};

const mockStore = createMockStore();
const store = mockStore({
  people: INITIAL_STATE,
});

describe('<Home />', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />, { context: { store } });
  });
});
