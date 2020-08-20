import React, { Component } from "react";
import config from './config';


class MyNotes extends Component {

  handleClickDelete = (e) => {
    e.preventDefault()

    const noteId = this.props.id
    console.log(this.props.id)


    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.props.deleteNote(noteId);
        // allow parent to perform extra behaviour
        this.props.onDelete(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    console.log(this.props.notes);
    console.log(this.props.id);
    const { note, id } = this.props;

    const myNotes = this.props.notes.map((note, index) => {
      console.log(note.id);
      return (
        <li 
          className="my-notes"
          key={note.id}
          >
          <button
            className="delete"
            type='button'
            name="completed"
            // onClick={() => { this.props.onDelete(this.props.id) }}
            onClick={this.handleClickDelete}
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

