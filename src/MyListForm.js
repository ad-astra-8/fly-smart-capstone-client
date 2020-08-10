import React, { Component } from "react";
import Navbar from "./Navbar";
import MyList from "./MyList";


class MyListForm extends Component {
  constructor(props){
    super(props)
  this.state = { 
    note: '',
  //   completed 
  };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.note === '') return;
    this.props.onFormSubmit(this.state.note);
    this.setState({ note: '' });
  

  const { note, completed } = e.target;
  // const note = {
  //   note: note.value,
  //   completed : false,
  // };


  const url = "https://fly-smart-api.herokuapp.com/api/notes";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "content-type": "application/json",
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
    .then((data) => {
      this.props.updateNote(data);
      alert('Post added!');
      window.location = '/my-list'
    })

    .catch((error) => {
      // this.setState({ appError: error });
    });
};



  render() {
    console.log(this.props.tasks);
    console.log(this.props.numTodos);

    
    return (
      <div>
        <Navbar />
        <section className="my-list">

          <h2 className="forum">Create your own list</h2>
          <form className="my-list-form" onSubmit={this.handleSubmit}>
          <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value={this.state.note}
          onChange={(e) => this.setState({note: e.target.value})}
          required
        />
        <button className='button'>Submit</button>
        <MyList numTodos={this.props.tasks.length} onDelete={this.props.onDelete} tasks={this.props.tasks} onFormSubmit={this.props.handleSubmit} />
          </form>
        </section>
      </div>

    );
  }
}

export default MyListForm;




