import React, { Component } from "react";
import Navbar from "./Navbar";


class Mylist extends Component {
  state = {
    items: [],
    title: "",
    completed: false
  };


  updateTitle = (title) => {
    this.setState({
      title: {
        value: title,
      },
    });
  };

  updateContent = (content) => {
    this.setState({
      content: {
        value: content,
      },
    });
  };

  // updateCompleted = (completed) => {
  //   this.setState({
  //     completed: {
  //       value: completed,
  //     },
  //   });
  // };

  onCheckItem = (index, item) => {
    console.log('handle check item called', { item })
    let { completed } = this.state;
    // completed[index] = !completed[index]; 
    completed = !completed;
    this.setState(state => ({
      completed: { ...state.completed, [index]: !state.completed[index] }
    }));
  }

  handleChange = (e) => {
    const { title, value } = e.target;
    this.setState({ [title]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('new note added');
    const { title, completed } = e.target;
    const note = {
      title: title.value,
      completed: completed,
    };

    // const url = "https://fly-smart-api.herokuapp.com/api/notes";
    const url = "http://localhost:3000/my-list";

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
        window.location = '/my-list'
      })

      .catch((error) => {
        // this.setState({ appError: error });
      });
  };

  renderTitle() {
    const noteTitle = this.title;

    return <h2>{noteTitle}</h2>;
  }

  handleAddItem = (itemTitle) => {
    const newItems = [
      ...this.state.items,
      { title: itemTitle, checked: false }
    ]
    this.setState({
      items: newItems
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <section classtitle="my-list">

          <h2 classtitle="forum">Create your own list</h2>

          <form classtitle="Mylist-form" onSubmit={this.handleSubmit} onSubmit={this.handleAddItem}>
            <label htmlFor="search-term">Add your personal items:</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue=""
              placeholder="Bring ipad"
              onChange={(e) => this.updatetitle(e.target.value)}
              // onChange={(e) => this.updateContent(e.target.value)}
              required />
            <button type="submit" id="submit-btn">Add</button>
            <p classtitle="error-message">please enter an item</p>
            <p classtitle="error-message">sorry, something went wrong</p>


            <h3>My list:</h3>
            {this.newItems}
            {/* <input type="checkbox" title="item" value="passport" />
            <label htmlFor="item">Bring ipad</label><br />
            <input type="checkbox" title="item" />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br />
            <input type="checkbox" title="item" />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br /> */}
          </form>
        </section>
      </div>

    );
  }
}

export default Mylist;




