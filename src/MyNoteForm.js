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
      completed: 0 ,
    }
    console.log(note)

    fetch(`${config.API_ENDPOINT}/notes`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(note),
      })

      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })

      .then((note) => {
        // alert('Post added!');
        window.location = '/my-list'
        this.props.addNote(note);
        // this.props.history.push(`/my-list`)
      })

      .catch((error) => {
        console.error({ error })
      });
  };



  render() {
    console.log(this.props.notes);

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
            <MyNotes numTodos={this.props.notes.length} onDelete={this.props.onDelete} notes={this.props.notes} onFormSubmit={this.props.handleSubmit} />
          </form>
        </section>
      </div>

    );
  }
}

export default MyNoteForm;




