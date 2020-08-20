import React, { Component } from 'react';
import Navbar from "./Navbar";
import config from './config';

// import Data from './Data';


class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],
            currentItemId: ""
        };

    }


    checkItem = (id) => {
        console.log(`checkItem ran`);
        console.log(`ITEM ID: ${id}`)
        this.setState({
            checklist: this.state.checklist.map(item => {
                if (item.id === id) {
                    //suppose to update 
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

    handleCurrentItemClick = (id) => {
        this.setState({ currentItemId: id });
        console.log(`${id} is current id`);
    };



    onClick = (event) => {
        const id = event.target.getAttribute("id");
        console.log(id);
        return id
    }


    handleCheck = (event) => {
        console.log(`handlecheck fetch`);
        // console.log(`handlecheck ran, ${JSON.stringify(item)} `)

        // const body = { id, item: item.item, completed: event ? 1 : 0 }
        // const id = event.target.id;

        // console.log(id);

        const item = {
            id: item.id,
            item: this.state.item,
            completed: 0,
        }


        fetch(`${config.API_ENDPOINT}/checklist/${item.id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(item),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
            })

            .then((item) => {

                this.handleCheck(this.id);

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
        const myChecklist = this.state.checklist.sort(function (a, b) { return a.id - b.id }
        ).map((item, index) => {
            console.log(item);
            console.log(item.id);
            return (
                <li
                    className="checklist-item"
                    style={{
                        textDecoration: item.completed
                            ? "line-through"
                            : ""
                    }}
                    // if(item.completed == 0) {"checked"}
                    key={item.id}
                    checked
                >
                    <input
                        className="checklist-input"
                        id={item.id}
                        type="checkbox"
                        name="item"
                        value={item.id}
                        // onChange={(event) => this.handleChange(item.id, item)}
                        onClick={(event, id) => this.checkItem(item.id)}
                        // onClick={(event, id) => this.handleCheck(item.id)}
                        // onChange={this.onClick}
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
                    <h2 className="">Checklist</h2>
                    <h3>Check what you have ready to pack:</h3>

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