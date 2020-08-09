import React, { Component } from "react";
import Navbar from "./Navbar";
import MyList from "./MyList";


class MyListForm extends Component {
  constructor(props){
    super(props)
  this.state = { term: '' };
  // state = {
  //   items: [],
  //   title: "",
  //   // completed: false
  // };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.term === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }


  render() {
    console.log(this.props.tasks);
    console.log(this.props.numTodos);

    // const MyList = (props) => {
    //   return(
    //     <div className='card-header'>
    //       <h1 className='card-header-title header'>
    //         You have {this.props.numTodos} Todos
    //       </h1>
    //     </div>
    //   )
    // }
    
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
          value={this.state.term}
          onChange={(e) => this.setState({term: e.target.value})}
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




