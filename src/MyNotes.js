import React, { Component } from "react";
import config from './config';


class MyNotes extends Component {

  handleClickDelete = (id) => {

    fetch(`${config.API_ENDPOINT}/notes/${id}`, 
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json'},
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then((id) => {
        window.location = '/my-notes'
        this.props.onDeleteNote(id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {

    const myNotes = this.props.notes.map((note, index) => {
      return (
        <li 
          className="my-notes"
          key={index}
          >
          <button
            className="delete"
            type='button'
            name="completed"
            onClick={(event, id) => this.handleClickDelete(note.id)}
          >
          X
          </button>
          <label className="checklist-label">{note.note}</label>
          </li>
      )
    })

    return (
      <>
      <div className='card-header'>
        <h1 className='card-header-title'>You have {this.props.numTodos} notes on your list</h1>
        </div>
        <ul className="form-wrapper">
          {myNotes}
        </ul>
      </>
    );


  };
}
export default MyNotes;

