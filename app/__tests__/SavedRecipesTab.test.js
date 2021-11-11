import React from "react";
import renderer from 'react-test-renderer';
import SavedRecipesTab from "../components/SavedRecipesTab";

it('renders correctly', () => {
  const tree = renderer.create(<SavedRecipesTab />).toJSON();
  expect(tree).toMatchSnapshot();
});