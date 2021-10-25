import React from "react";
import renderer from 'react-test-renderer';
import Container from /../components/Container.js;

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});