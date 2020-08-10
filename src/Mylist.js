import React, { Component } from "react";


class MyList extends Component {

    render() {
            console.log(this.props.tasks);    

        const todos = this.props.tasks.map((todo, index) => {
            return (
                <div className='list-wrapper' key={index} >
                    <ul>
                        <li>{todo}</li>
                        <button className="delete" onClick={() => { this.props.onDelete(this.props.id) }}>X</button>
                    </ul>

                </div>
            )
        })

        return (
            <section>
                <div className='card-header'>
                <h1 className='card-header-title'>You have {this.props.numTodos} tasks on your list</h1>
                    {todos}
                </div>
            </section>
        );

        
    };
}
export default MyList;

