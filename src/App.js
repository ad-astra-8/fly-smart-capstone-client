import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from './config';
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import MyNoteForm from "./MyNoteForm";
import Checklist from "./Checklist";
import Register from "./Register";
import About from "./About";


class App extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {

    let getCollectionByUserId = `${config.API_ENDPOINT}/notes`;

    fetch(getCollectionByUserId)
      .then((response) => response.json())
      .then((data) => {
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
              <Route exact path="/about" component={About} />
              <Route exact path="/homepage" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/checklist" component={Checklist} />
              <Route
                exact
                path="/my-notes"
                render={(props) => <MyNoteForm numTodos={this.state.notes.length} notes={this.state.notes} onDeleteNote={this.handleDeleteNote} onAddNote={this.handleAddNote} />}
              />
            </Switch>
          </BrowserRouter>
        </main>
      </div >
    );
  }
}
export default App;
