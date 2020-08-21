import React, { Component } from "react";
import config from './config';


class MyNotes extends Component {

  handleClickDelete = (id) => {
        // e.preventDefault();

    console.log(`NOTE ID: ${id}`);

    // const note = {
    //   note: this.state.note,
    //   completed: 0 ,
    // }
    // console.log(note)



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
    // console.log(this.props.notes);
    // const { note, id } = this.props;

    const myNotes = this.props.notes.map((note, index) => {
      // console.log(note.id);
      return (
        <li 
          className="my-notes"
          key={index}
          >
          <button
            className="delete"
            type='submit'
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

