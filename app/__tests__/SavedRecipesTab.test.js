import React from "react";
import renderer from 'react-test-renderer';
import SavedRecipesTab from "../components/SavedRecipesTab";
import { cleanup, render } from '@testing-library/react-native';

describe('SavedRecipesTab', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SavedRecipesTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a search bar', () => {
    const { getByTestId } = render(<SavedRecipesTab />);
    expect(getByTestId('savedSearch')).toBeTruthy();
  });
});