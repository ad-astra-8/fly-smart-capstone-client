import React, { Component } from "react";
import Navbar from "./Navbar";


class Mylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: false
    };
  }

  updateTitle = (title) => {
    this.setState({
      title: {
        value: title,
      },
    });
  };

  updateCompleted = (completed) => {
    this.setState({
      completed: {
        value: completed,
      },
    });
  };

  handleChange = (e) => {
    const { title, value } = e.target;
    this.setState({ [title]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, completed } = e.target;
    const note = {
      title: title.value,
      completed: completed.value,
    };

    ////TO UPDATE
    const url = "https://keto-diet-api.herokuapp.com/api/notes";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "completed-type": "application/json",
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
        window.location = '/forum'
      })

      .catch((error) => {
        // this.setState({ appError: error });
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <section classtitle="my-list">

          <h2 classtitle="forum">Create your own list</h2>
          <form classtitle="Mylist-form" onSubmit={this.handleSubmit}>

            <label htmlFor="search-term">Add your personal items:</label>
            <input type="input" title="search" id="postComment" title="completed" placeholder="Bring ipad" onChange={(e) => this.updatecompleted(e.target.value)} />
            <button type="submit" id="submit-btn">Add</button>
            <p classtitle="error-message">please enter an item</p>
            <p classtitle="error-message">sorry, something went wrong</p>


            <h3>My list:</h3>
            <input type="checkbox" title="item" value="passport" />
            <label htmlFor="item">Bring ipad</label><br />
            <input type="checkbox" title="item" />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br />
            <input type="checkbox" title="item" />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br />
          </form>
        </section>
      </div>

    );
  }
}

export default Mylist;




