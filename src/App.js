import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from './config';
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import MyNoteForm from "./MyNoteForm";
import Checklist from "./Checklist";
// import Login from './Login';
import Register from './Register';
// import Data from './Data';
// import MyNotes from './MyNotes';


class App extends Component {
  state = {
    // notes: ['note 1', 'note 2', 'note 3'],
    notes: [],
    // checklist: [],
    // completed: false

  };

  componentDidMount() {
    // Promise.all([
    //   fetch(`${config.API_ENDPOINT}/notes`)
    // ])
    //   .then(([notesRes]) => {
    //     if (!notesRes.ok)
    //       return notesRes.json().then(e => Promise.reject(e));

    //     return Promise.all([notesRes.json()]);
    //   })
    //   .then(([notes]) => {
    //     this.setState({ notes });
    //   })
    //   .catch(error => {
    //     console.error({ error });
    //   });
    // }

    // componentDidMount() {
    let getCollectionByUserId = `${config.API_ENDPOINT}/notes`;
    //  ${TokenService.getUserId()};

    fetch(getCollectionByUserId)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          notes: data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleAddNote = note => {
    this.setState({ notes: [...this.state.notes, note] });
  }

  handleDeleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
};

  render() {
    console.log(this.state.notes);

    const value = {
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.handleAddNote,
    };

    return (
      <div className="App" >
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/homepage" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/checklist" component={Checklist} />
              {/* <Route path="/my-list" component={Mylist} /> */}
              <Route
                exact
                path="/my-notes"
                render={(props) => <MyNoteForm numTodos={this.state.notes.length} notes={this.state.notes} onDeleteNote={this.handleDeleteNote} onAddNote={this.handleAddNote} />}
              />

              {/* <Route
                exact
                path="/my-list"
                render={(props) => <MyList numTodos={this.state.notes.length} notes={this.state.notes} onDelete={this.handleDelete} onFormSubmit={this.handleAddNote} />}
              /> */}
            </Switch>
          </BrowserRouter>

        </main>
      </div >
    );
  }
}
export default App;
