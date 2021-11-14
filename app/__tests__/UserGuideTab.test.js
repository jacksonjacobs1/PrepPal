import React from "react";
import renderer from 'react-test-renderer';
import UserGuideTab from "../components/UserGuideTab";

import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import UserGuideTab from '../components/UserGuideTab';

afterEach(cleanup);

describe('UserGuideTab', () => {
    it("displays the correct text", () => {
        const UserGuideOpening2 = '(Note: not all of the above functionality exists or works as promised yet, because this is just a demo.)'
        const UserGuideOpening3 = 'Welcome to PrepPal! If you\'re looking for the perfect recipe for the ingredients you already have, then this app may be just what you need! To search for a new recipe, click the "New Recipe" button on the taskbar to let the program know what ingredients you have on hand. We will then look for recipes online and give you the option to save them. You can also click "Saved Recipes" on the taskbar to look at the recipes you already have stored.'
        const UserGuideOpening1 = "Jackson Jacobs"
        const {toJSON, getByText} = render(<UserGuideTab />);
        const foundUserGuideText1 = getByText(UserGuideOpening1);
        expect(foundUserGuideText1.props.children).toEqual("Jackson Jacobs")
        const foundUserGuideText2 = getByText(UserGuideOpening2);
        expect(foundUserGuideText2.props.children).toEqual('(Note: not all of the above functionality exists or works as promised yet, because this is just a demo.)')
        const foundUserGuideText3 = getByText(UserGuideOpening3)
        expect(foundUserGuideText3.props.children).toEqual('Welcome to PrepPal! If you\'re looking for the perfect recipe for the ingredients you already have, then this app may be just what you need! To search for a new recipe, click the "New Recipe" button on the taskbar to let the program know what ingredients you have on hand. We will then look for recipes online and give you the option to save them. You can also click "Saved Recipes" on the taskbar to look at the recipes you already have stored.')
        expect(toJSON()).toMatchSnapshot();
    })
});