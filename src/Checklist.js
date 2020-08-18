import React, { Component } from 'react';
import Navbar from "./Navbar";
import config from './config';

// import Data from './Data';


class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],

        };

    }

    // onChange = event => {
    //     const { value, completed } = event.target
    //     this.setState({
    //         [completed]: value
    //     })
    // };

    onCheckItem = (index, item, completed) => {
        console.log(item, this.state.completed)
        this.setState(state => ({
            completed: { ...state.completed, [index]: !state.completed[index] }
        }));
    }

    handleCompleted = (item, completed) => {
        this.setState({
            completed: !this.state.completed
        });
    }

    handleCheck = (id, item, event) => {
        console.log(`handlecheck ran, ${JSON.stringify(item)} ${JSON.stringify(id)}`)

        const body = { id, item: item.item, completed: event ? 1 : 0 }
        fetch(`${config.API_ENDPOINT}/checklist/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
            })
            .then(() => {
                this.setState({
                    completed: !this.state.completed
                });
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
            })
            .catch(error => {
                console.error({ error })
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
        console.log(this.state.item);
        // console.log(item);
        const myChecklist = this.state.checklist.sort(function (a, b) { return a.id - b.id }
        ).map((item, index) => {
            console.log(item);
            return (
                <li
                    className="checklist-item"
                    style={{
                        textDecoration: item.completed === 1
                            ? "line-through"
                            : ""
                    }}
                    // if(item.completed == 0) {"checked"}
                    key={item.id}
                    checked
                >
                    <input className="checklist-input" id={item.id} type="checkbox" name="item" value={item.completed} onChange={() => this.handleCompleted(item.id, item)} onClick={(event) => this.handleCheck(item.id, item, this.checked)} />
                    <label className="checklist-label" htmlFor="item">{item.item}</label>
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