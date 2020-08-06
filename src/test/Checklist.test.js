import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from '../Checklist';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Checklist />
        </BrowserRouter >
        , div);
    ReactDOM.unmountComponentAtNode(div);
});