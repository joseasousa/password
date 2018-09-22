import React from 'react';
import { shallow } from 'enzyme';

import Site from '../../../views/Home/Site';


describe('<Site />', () => {
  it('should render', () => {
    const wrapper = shallow(<Site />);
  });
});
