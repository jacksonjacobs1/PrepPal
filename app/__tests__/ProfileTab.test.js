import React from "react";
import renderer from 'react-test-renderer';
import ProfileTab from '../components/ProfileTab';

it('renders correctly', () => {
  const tree = renderer.create(<ProfileTab />).toJSON();
  expect(tree).toMatchSnapshot();
});