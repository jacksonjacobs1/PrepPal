import React from "react";
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import { ReactDOM } from "react";
import Container from '../components/Container.js';

describe('Container', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the navbar on the home tab', () => {
    const testIdName = 'home';
    const { getByTestId } = render(<Container />);
    const button = getByTestId(testIdName);
    fireEvent.press(button);
    const foundButton = getByTestId(testIdName);
    expect(foundButton).toBeTruthy();
  });

  it('displays the navbar on the saved recipes tab', () => {
    const testIdName = 'list-outline';
    const { getByTestId } = render(<Container />);
    const button = getByTestId(testIdName);
    fireEvent.press(button);
    const foundButton = getByTestId('list');
    expect(foundButton).toBeTruthy();
  });

  it('displays the navbar on the search tab', () => {
    const testIdName = 'search-outline';
    const { getByTestId } = render(<Container />);
    const button = getByTestId(testIdName);
    fireEvent.press(button);
    const foundButton = getByTestId('search');
    expect(foundButton).toBeTruthy();
  });

  it('displays the navbar on the user guide tab', () => {
    const testIdName = 'book-outline';
    const { getByTestId } = render(<Container />);
    const button = getByTestId(testIdName);
    fireEvent.press(button);
    const foundButton = getByTestId('book');
    expect(foundButton).toBeTruthy();
  });
});

