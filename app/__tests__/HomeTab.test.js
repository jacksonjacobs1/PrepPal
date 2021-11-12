import React from "react";
import renderer from 'react-test-renderer';
import HomeTab from '../components/HomeTab';
import { cleanup, render } from '@testing-library/react-native';

afterEach(cleanup);

describe('HomeTab', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeTab />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a search bar', () => {
    const { getByTestId } = render(<HomeTab />);
    expect(getByTestId('savedSearch')).toBeTruthy();
  });
});