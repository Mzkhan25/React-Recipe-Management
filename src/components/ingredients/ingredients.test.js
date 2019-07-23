import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from './ingredients';

describe('<Ingredients />', () => {
  test('renders', () => {
    const wrapper = shallow(<Ingredients />);
    expect(wrapper).toMatchSnapshot();
  });
});
