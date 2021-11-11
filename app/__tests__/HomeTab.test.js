import React from "react";
import renderer from 'react-test-renderer';
import HomeTab from '../components/HomeTab';

it('renders correctly', () => {
  const tree = renderer.create(<HomeTab />).toJSON();
  expect(tree).toMatchSnapshot();
});