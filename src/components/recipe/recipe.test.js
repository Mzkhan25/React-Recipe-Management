import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './recipe';

describe('<Recipe />', () => {
  test('renders', () => {
    const wrapper = shallow(<Recipe />);
    expect(wrapper).toMatchSnapshot();
  });
});
