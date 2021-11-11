import React from "react";
import renderer from 'react-test-renderer';
import SearchTab from "../components/SearchTab";

it('renders correctly', () => {
  const tree = renderer.create(<SearchTab />).toJSON();
  expect(tree).toMatchSnapshot();
});