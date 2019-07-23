import React from 'react';
import { shallow } from 'enzyme';
import Recipes from './recipes';

describe('<Recipes />', () => {
  test('renders', () => {
    const wrapper = shallow(<Recipes />);
    expect(wrapper).toMatchSnapshot();
  });
});
