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
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`)
    ])
      .then(([notesRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json()]);
      })
      .then(([notes]) => {
        this.setState({ notes });
      })
      .catch(error => {
        console.error({ error });
      });
    // }

    // componentDidMount() {
    let getCollectionByUserId = `https://fly-smart-api.herokuapp.com/api/checklist`;
    //  ${TokenService.getUserId()};

    fetch(getCollectionByUserId)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          checklist: data,
        });
      })
      .catch((error) => console.log(error));
  }



  handleAddNote = note => {
    this.setState({ notes: [...this.state.notes, note] });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.notes];
    newArr.splice(index, 1);
    this.setState({ notes: newArr });
  }

  // handleCompleted = (index, item, completed) => {
  //   console.log(item, this.state.completed)
  //   this.setState(state => ({
  //     completed: { ...state.completed, [index]: !state.completed[index] }
  //   }));
  // }

  // handleCheck = (e) => {
  //   console.log(`handlecheck ran`)

  //   const item_id = this.state.checklist.map((item, index) => {
  //     console.log(index);
  //     if ([item.index] == index) {
  //       return index
  //     }
  //   })
  //   console.log(item_id)


  //   fetch(`${config.API_ENDPOINT}/checklist/${item_id}`, {
  //     method: 'PATCH',
  //     headers: { 'content-type': 'application/json' },
  //   })
  //     .then(res => {
  //       if (!res.ok)
  //         return res.json().then(e => Promise.reject(e))
  //     })
  //     .then(() => {
  //       console.log(item_id)
  //       this.setState({
  //         completed : !this.state.completed
  //       });
  //           // // allow parent to perform extra behaviour
  //       // this.props.completedItem(checklistId)
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // }

  // 	handleDeleteNote = noteId => {
  //     this.setState({
  //         notes: this.state.notes.filter(note => note.id !== noteId)
  //     });
  // };

  render() {
    // console.log(this.state.notes);

    const value = {
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addNote: this.handleAddNote,
      checkItem: this.handleCompleted
    };

    const noteId = this.state.notes.map((note, index) => {
      // console.log(index);
      return { index }
    })
    console.log(noteId);


    // const myChecklist = this.state.checklist.map(({ item }, index) => {
    //   // console.log(this.state.checklist);
    //   return (
    //       <li 
    //       className="checklist-item"
    //         style={{
    //           textDecoration: this.state.completed[index]
    //             ? "line-through"
    //             : ""
    //         }}
    //         key={index}
    //         >
    //         <input className="checklist-input" id={index} type="checkbox" name="item" value={this.state.completed} onChange={() => this.handleCompleted(index, item)} onClick={() => this.handleCheck(index, item)} />
    //         <label className="checklist-label" htmlFor="item">{item}</label>
    //       </li>
    //   );
    // });

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
                path="/my-list"
                render={(props) => <MyNoteForm noteId={noteId} numTodos={this.state.notes.length} notes={this.state.notes} onDelete={this.handleDeleteNote} onFormSubmit={this.handleAddNote} />}
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
