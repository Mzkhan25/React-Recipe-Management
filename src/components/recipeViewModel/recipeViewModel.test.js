import React from 'react';
import { shallow } from 'enzyme';
import RecipeViewModel from './recipeViewModel';

describe('<RecipeViewModel />', () => {
  test('renders', () => {
    const wrapper = shallow(<RecipeViewModel />);
    expect(wrapper).toMatchSnapshot();
  });
});
