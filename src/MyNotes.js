import React, { Component } from "react";
import config from './config';


class MyNotes extends Component {
        
      handleClickDelete = (e) => {
        e.preventDefault()

        const noteId = this.props.note.id
      
        // const noteId = note_id
        console.log(this.props.note.id)


        fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
          })
          .then(() => {
            this.props.deleteNote(noteId);
            // allow parent to perform extra behaviour
            this.props.onDeleteNote(noteId)
          })
          .catch(error => {
            console.error({ error })
          })
      }
    
    render() {
            console.log(this.props.notes);   
            console.log(this.props.noteId) 
        const { note, id } = this.props;

        const myNotes = this.props.notes.map(({note}, index) => {
            return (
                <div className='list-wrapper' key={index} >
                    <ul>
                        <li>{note}</li>
                        <button className="delete" name="completed" onClick={() => { this.props.onDelete(this.props.id) }} onClick={this.handleClickDelete}>X</button>
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

