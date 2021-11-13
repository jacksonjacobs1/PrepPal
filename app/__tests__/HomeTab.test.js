import React from "react";
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import HomeTab from '../components/HomeTab';
import Container from '../components/Container';

afterEach(cleanup);

describe('HomeTab', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a "See All Saved Recipes" button', () => {
    const { getByTestId } = render(<HomeTab />);
    expect(getByTestId('seeAllButton')).toBeTruthy();
  });

  it('takes user to the saved recipes tab upon pushing the "See All" button', () => {
    const { getByTestId } = render(<Container />);
    const seeAllButton = getByTestId('seeAllButton');

    fireEvent.press(seeAllButton);
    expect(getByTestId('savedRecipesTab')).toBeTruthy();
  });
});