import React, { Component } from "react";
import config from './config';


class MyNotes extends Component {

  handleClickDelete = (e) => {
    e.preventDefault();

    const note = {
      note: this.state.note,
      completed: 0 ,
    }
    console.log(note)



    fetch(`${config.API_ENDPOINT}/notes/${note.id}`, {
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
        this.props.deleteNote(note.id);
        // allow parent to perform extra behaviour
        this.props.onDelete(note.id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    console.log(this.props.notes);
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

