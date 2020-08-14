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
    // notes: ['note 1', 'note 2', 'note 3']
		notes: []
  };

  // componentDidMount() {
  //   fetch("https://fly-smart-api.herokuapp.com/api/notes")
  //     // if the api returns data ...
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Something went wrong, please try again later.");
  //       }
  //       // ... convert it to json
  //       return res.json();
  //     })
  //     // use the json api output
  //     .then((data) => {
  //       //check if there is meaningful data
        
  //       this.setState({
  //         tabsProp: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       // this.setState({
  //       //     error: err.message
  //       // })
  //     });
  // }
  componentDidMount() {
		Promise.all([
			fetch(`${config.API_ENDPOINT}/notes`)
		])
			.then(([notesRes]) => {
				if (!notesRes.ok)
					return notesRes.json().then(e => Promise.reject(e));

				return Promise.all([notesRes.json()]);
			})
			.then(([notes]) => {
				this.setState({notes});
			})
			.catch(error => {
				console.error({error});
			});
	}

  handleAddNote = note => {
    this.setState({ notes: [...this.state.notes, note] });
  }

  // handleDelete = (index) => {
  //   const newArr = [...this.state.notes];
  //   newArr.splice(index, 1);
  //   this.setState({ notes: newArr });
  // }

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
				addNote: this.handleAddNote
		};



    return (
      <div className="App">
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
                path="/my-list" 
                render={(props) => <MyNoteForm numTodos={this.state.notes.length} notes={this.state.notes} onDelete={this.handleDeleteNote} onFormSubmit={this.handleAddNote} />}
                />

              {/* <Route
                exact
                path="/my-list"
                render={(props) => <MyList numTodos={this.state.notes.length} notes={this.state.notes} onDelete={this.handleDelete} onFormSubmit={this.handleAddNote} />}
              /> */}
            </Switch>
          </BrowserRouter>

        </main>
      </div>
    );
  }
}
export default App;
