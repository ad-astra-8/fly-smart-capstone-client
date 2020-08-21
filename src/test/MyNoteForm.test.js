import React from 'react';
import ReactDOM from 'react-dom';
import MyNoteForm from '../MyNoteForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <MyNoteForm />
        </BrowserRouter >
        , div);
    ReactDOM.unmountComponentAtNode(div);
});