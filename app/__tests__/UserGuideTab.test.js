import React from "react";
import renderer from 'react-test-renderer';
import UserGuideTab from "../components/UserGuideTab";

it('renders correctly', () => {
  const tree = renderer.create(<UserGuideTab />).toJSON();
  expect(tree).toMatchSnapshot();
});