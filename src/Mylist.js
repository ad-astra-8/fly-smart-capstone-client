import React, { Component } from "react";
import Navbar from "./Navbar";


class Mylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      name: "",
      tabName: "",
      content: "",
    };
  }

  updatetabName(tabName) {
    this.setState({
      tabName: {
        value: tabName,
      },
    });
  }

  updateName = (name) => {
    this.setState({
      name: {
        value: name,
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, tabName, content } = e.target;
    const note = {
      name: name.value,
      id_folder: parseInt(tabName.value),
      content: content.value,
    };

    const url = "https://keto-diet-api.herokuapp.com/api/notes";

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
        <section className="my-list">

          <h2 className="forum">Create your own list</h2>
          <form className="Mylist-form" onSubmit={this.handleSubmit}>

            <label htmlFor="search-term">Add your personal items:</label>
            <input type="input" name="search" id="postComment" name="content" placeholder="Bring ipad" onChange={(e) => this.updateContent(e.target.value)}/>
            <button type="submit" id="submit-btn">Add</button>
            <p className="error-message">please enter an item</p>
            <p className="error-message">sorry, something went wrong</p>
            {/* <fieldset className="post-title">
              <label htmlFor="title">Give a title for your post</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue=""
                onChange={(e) => this.updateName(e.target.value)}
              />
            </fieldset> */}

              {/* <label htmlFor="post-comment">
                Post your comment about:
              </label>
              <textarea
                id="postComment"
                placeholder="leave your comment here"
                name="content"
                onChange={(e) => this.updateContent(e.target.value)}
              ></textarea>
            <button type="submit" id="submit-btn">
              Submit
            </button> */}

            <h3>My list:</h3>
            <input type="checkbox" name="item" value="passport"  />
            <label htmlFor="item">Bring ipad</label><br />
            <input type="checkbox" name="item" />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br />
            <input type="checkbox" name="item"  />
            <label htmlFor="item">Lorem ipsum dolor sit amet</label><br />
          </form>
        </section>
      </div>

    );
  }
}

export default Mylist;




