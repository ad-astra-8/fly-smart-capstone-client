import React, { Component } from "react";
// import MyListForm from './MyListForm'


class MyList extends Component {

    render() {
        console.log(this.props.tasks);    
    
        const todos = this.props.tasks.map((todo, index) => {

            return (
                <div className='list-wrapper' key={index} id={index} onDelete={this.props.onDelete}>
                    <ul>
                        <li>{todo}</li>
                        <button className="delete" onClick={() => { this.props.onDelete(this.props.id) }}>X</button>
                    </ul>

                </div>
            );
        })

        return (
            <section>
        
            {/* <MyListForm onSubmit={this.handleSubmit} /> */}
                <div className='card-header'>
                    
                <h1 className='card-header-title'>You have {this.props.numTodos} tasks on your list</h1>
                    
                    {todos}
                </div>

            </section>
        );

        
    }
}
export default MyList;

