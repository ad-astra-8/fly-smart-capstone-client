import React, { Component } from "react";
import Navbar from "./Navbar";
import MyNotes from "./MyNotes";
import config from './config';



class MyNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: '',
      completed: 0
    };
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      note: this.state.note,
      completed: 0,
    }
    
    // console.log(note)

    fetch(`${config.API_ENDPOINT}/notes`,
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((note) => {
        console.log('step one');
        this.props.onAddNote(note);
        // window.location = '/my-notes'
      })
      .catch((error) => {
        console.log('step two');
        // console.error({ error })
      });
  };



  render() {
    // console.log(this.props.notes);

    return (
      <div>
        <Navbar />
        <section className="my-list">

          <h2 className="forum">Create your own notes</h2>
          <form className="my-list-form" onSubmit={this.handleSubmit}>
            <input
              type='text'
              className='input'
              placeholder='Enter Item'
              value={this.state.note}
              name="note"
              id="note"
              onChange={(e) => this.setState({ note: e.target.value })}
              // onChange={(e) => this.addNote(e.target.value)}
              required
            />
            <button className='button'>Submit</button>
            <MyNotes numTodos={this.props.notes.length} onDeleteNote={this.props.onDeleteNote} notes={this.props.notes} />
          </form>
        </section>
      </div>

    );
  }
}

export default MyNoteForm;




