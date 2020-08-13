import React, { Component } from "react";


class MyNotes extends Component {

    render() {
            console.log(this.props.notes);    

        const myNotes = this.props.notes.map(({ id, note, completed}, index) => {
            return (
                <div className='list-wrapper' key={index} >
                    <ul>
                        <li>{note}</li>
                        <button className="delete" name="completed" onClick={() => { this.props.onDelete(this.props.id) }}>X</button>
                    </ul>

                </div>
            )
        })

        return (
            <section>
                <div className='card-header'>
                <h1 className='card-header-title'>You have {this.props.numTodos} notes on your list</h1>
                    {myNotes}
                </div>
            </section>
        );

        
    };
}
export default MyNotes;

