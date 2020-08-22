import React from 'react';
import ReactDOM from 'react-dom';
import MyNoteForm from '../MyNoteForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const notes = [ { id: 1, note: "pack socks", completed: 0 },  { id: 1, note: "pack socks", completed: 0 }];
    ReactDOM.render(
        <BrowserRouter>
            <MyNoteForm notes={notes}/>
        </BrowserRouter >
        , div);
    ReactDOM.unmountComponentAtNode(div);
});