import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import Mylist from "./Mylist";
import Checklist from "./Checklist";
// import Login from './Login';
import Register from './Register';
// import Data from './Data';


class App extends Component {
  //   state = {
  //     data: [],
  //     // mylist: []
  //   };

  // componentDidMount() {
  //   fetch("http://localhost:3000/")
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

  // renderContent() {
  //   const currentTab = this.props.tabs.map((tab, index) => {
  //     if (this.state.currentTabIndex === tab.note_folder_id) {

  //       return (
  //         <div key={index}>
  //           <h2 className="content-title">{tab.name}</h2>
  //           <div className="content"><p className="content-p">{tab.content}</p></div>
  //         </div>
  //       );
  //     } else {

  //       return null;
  //     }

  //   });
  //   return currentTab;
  // }


  // updateNote = (note) => {
  //   this.setState({
  //     tabsProp: [...this.state.tabsProp, note],
  //   });
  // }

  render() {

    return (
      <div className="App">
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/homepage" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/checklist" component={Checklist} />
              <Route path="/my-list" component={Mylist} />

              {/* <Route
                exact
                path="/homepage"
              //   render={(props) => <HomePage tabs={this.state.tabsProp} />}
              /> */}
              {/* <Route path="/login" component={Login} /> */}
              {/* <Route exact path="/forum"
                render={(props) => (
                  <Forum
                    tabs={this.state.tabsProp}
                    updateNote={this.updateNote}
                  />
                )}
                /> */ }

            </Switch>
          </BrowserRouter>

        </main>
      </div>
    );
  }
}
export default App;
