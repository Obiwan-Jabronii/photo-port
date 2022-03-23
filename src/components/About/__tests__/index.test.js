import React from "react";
import{ render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First test 
    it('renders', () => {
        render(<About />)
    });

    // Second Test
    it('matches the screenshot DOM noode structure', () => {
        //render About 
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})
