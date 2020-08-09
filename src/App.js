import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import MyListForm from "./MyListForm";
import Checklist from "./Checklist";
// import Login from './Login';
import Register from './Register';
// import Data from './Data';
import MyList from './MyList';


class App extends Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }


  render() {
    console.log(this.state.tasks);

    // const MyList = (props) => {
    //   return (
    //     <div className='card-header'>
    //       <h1 className='card-header-title header'>
    //         You have {this.props.numTodos} Todos
    //   </h1>
    //     </div>
    //   )
    // }


    // const TodoList = (props) => {
    //   const todos = props.tasks.map((todo, index) => {
    //     return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    //   })
    //   return (
    //     <div className='list-wrapper'>
    //       {todos}
    //     </div>
    //   );
    // }

    // const Todo = (props) => {
    //   return (
    //     <div className='list-item'>
    //       {props.content}
    //       <button class="delete is-pulled-right" onClick={() => { props.onDelete(props.id) }}></button>
    //     </div>
    //   );
    // }

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
                render={(props) => <MyListForm numTodos={this.state.tasks.length} tasks={this.state.tasks} onDelete={this.handleDelete} onFormSubmit={this.handleSubmit} />}
                />

              {/* <Route
                exact
                path="/my-list"
                render={(props) => <MyList numTodos={this.state.tasks.length} tasks={this.state.tasks} onDelete={this.handleDelete} onFormSubmit={this.handleSubmit} />}
              /> */}
            </Switch>
          </BrowserRouter>

        </main>
      </div>
    );
  }
}
export default App;
