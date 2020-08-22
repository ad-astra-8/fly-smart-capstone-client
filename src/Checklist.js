import React, { Component } from 'react';
import Navbar from "./Navbar";
import config from './config';

// import Data from './Data';


class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],
            completed: 0
        };

    }


    checkItem = (id, item) => {
        console.log(`checkItem ran`);
        console.log(`ITEM ID: ${id}`)
        this.setState({
            checklist: this.state.checklist.map(item => {
                if (item.id === id) {

                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            })
        })
    }
    //when the user click on check, it changes completed state from 0 (false) to 1 (true)
    //then the item get crossed off
    handleCheck = (id) => {
        console.log(`handlecheck fetch`);
        console.log(`item ID: ${id}`);
        // const completed = this.state.completed
        console.log(`${this.state.completed}`);



        let item = this.state.checklist.find(item => item.id === id);
        // To invert this note's completed value, do this:
        // 1 - note.completed


        fetch(`${config.API_ENDPOINT}/checklist/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                //i dont know if this is rigth
                {completed : 1 - item.completed}
            ),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
            })
            .then(() => {
                // window.location = '/checklist'
                // alert('Completed!');
                // .then(res => {
                //on click i wanted to initiate the state change
                this.setState({
                    completed: !this.state.completed
                });
            })

            .catch(error => {
        //     console.error({ error })
        })
    }



    componentDidMount() {
        let getCollectionByUserId = `${config.API_ENDPOINT}/checklist`;
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
        const myChecklist = this.state.checklist
            .sort(function (a, b) { return a.id - b.id }
            )
            .map((item, index) => {
                // console.log(item);
                // console.log(item.id);
                return (
                    //checkbox and item to be crossed when completed
                    <li
                        className="checklist-item"
                        style={{
                            textDecoration: item.completed
                                ? "line-through"
                                : ""
                        }}
                        // if(item.completed == 0) {"checked"}
                        key={item.id}
                    >
                        <input
                            className="checklist-input"
                            id={item.id}
                            type="checkbox"
                            name="item"
                            value={item.id}
                            onClick={(event, id) => this.checkItem(item.id)}
                            onChange={(event, id) => this.handleCheck(item.id)}
                        />
                        <label
                            className="checklist-label"
                            htmlFor="item">
                            {item.item}
                        </label>
                    </li>
                );
            });


        return (
            <div>
                <Navbar />
                <section className="checklist">
                    <h2 className="">TSA Security Checklist</h2>
                    <h3>Check what you have ready:</h3>

                    <form className="checklist-form"
                    >
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