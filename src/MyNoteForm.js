import React, { Component } from "react";
import Navbar from "./Navbar";
import MyNotes from "./MyNotes";
import config from './config';



class MyNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: '',
      completed: false
    };
  }

  // handleAddNote = note => {
	// 	// console.log(note)
	// 		this.setState({
	// 				notes: [...this.state.notes, note]
	// 		})
  // }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.state.note === '') return;
    // this.props.onFormSubmit(this.state.note);
    // this.setState({ note: '' });

    const note = {
      note: this.state.note,
      completed: false,
    }
      console.log(note)

    // const { note, completed } = e.target;
    // const note = {
    //   note: note.value,
    //   completed : false,
    // };


    // const url = "https://fly-smart-api.herokuapp.com/api/notes";

    fetch(`${config.API_ENDPOINT}/notes`,
    // fetch(url,
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
        console.log(note)
        this.props.addNote(note);
        alert('Post added!');
        // this.props.history.push(`/my-list`)
        window.location = '/my-list'
      })

      .catch((error) => {
        // this.setState({ appError: error });
      });
  };



  render() {
    console.log(this.props.notes);
    console.log(this.props.numTodos);


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
            <MyNotes numTodos={this.props.notes.length} onDelete={this.props.onDelete} notes={this.props.notes} onFormSubmit={this.props.handleSubmit}/>
          </form>
        </section>
      </div>

    );
  }
}

export default MyNoteForm;




