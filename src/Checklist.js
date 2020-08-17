import React, { Component } from 'react';
import Navbar from "./Navbar";
import config from './config';

// import Data from './Data';


class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],
            // completed: { 0: true, 1: false}
            completed: false

        };

    }

    // onChange = event => {
    //     const { value, completed } = event.target
    //     this.setState({
    //         [completed]: value
    //     })
    // };

    // onCheckItem = (index, item, completed) => {
    //     console.log(item, this.state.completed)
    //     this.setState(state => ({
    //         completed: { ...state.completed, [index]: !state.completed[index] }
    //     }));
    // }

    handleCompleted = (index, item, completed) => {
        console.log(item, this.state.completed)
        this.setState(state => ({
          completed: { ...state.completed, [index]: !state.completed[index] }
        }));
      }
    

    handleCheck = (e) => {
        console.log(`handlecheck ran`)
    
        const item_id = this.state.checklist.map((item, index) => {
          console.log(index);
          if ([item.index] == index) {
            return index
          }
        })
        console.log(item_id)
    
    
        fetch(`${config.API_ENDPOINT}/checklist/${item_id}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
          })
          .then(() => {
            console.log(item_id)
            this.setState({
              completed : !this.state.completed
            });
                // // allow parent to perform extra behaviour
            // this.props.completedItem(checklistId)
          })
          .catch(error => {
            console.error({ error })
          })
      }
    


    componentDidMount() {
        let getCollectionByUserId = `https://fly-smart-api.herokuapp.com/api/checklist`;
        //  ${TokenService.getUserId()};

        fetch(getCollectionByUserId)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    checklist: data,
                });
            })
            .catch((error) => console.log(error));
    }




    render() {

        console.log(this.props.checklist)
        // console.log(this.props.myChecklist);
        // console.log(this.checklistId)


        const myChecklist = this.state.checklist.map(({ item }, index) => {
            // console.log(this.state.checklist);
            return (
                <li 
                className="checklist-item"
                  style={{
                    textDecoration: this.state.completed[index]
                      ? "line-through"
                      : ""
                  }}
                  key={index}
                  >
                  <input className="checklist-input" id={index} type="checkbox" name="item" value={this.state.completed} onChange={() => this.handleCompleted(index, item)} onClick={() => this.handleCheck(index, item)} />
                  <label className="checklist-label" htmlFor="item">{item}</label>
                </li>
            );
          });
      
      
        return (
            <div>
                <section className="checklist">
                    <Navbar />
                    <h2 className="">Checklist</h2>
                    <h3>Check what you have ready to pack:</h3>

                    <form className="checklist-form">
                        <ul className="checklist-container">
                        {myChecklist}
                        </ul>
                    </form>
                </section>
            </div >
        );
    }

}

export default Checklist;