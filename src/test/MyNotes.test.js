import React from 'react';
import ReactDOM from 'react-dom';
import MyNotes from '../MyNotes';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MyNotes />
        </BrowserRouter >
        , div);
    ReactDOM.unmountComponentAtNode(div);
});