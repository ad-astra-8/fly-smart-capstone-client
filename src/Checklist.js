import React, { Component } from 'react';
import Navbar from "./Navbar";
import Data from './Data';


class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checklist: [],
            // item: {id: 1, item: 'somethg', completed: false},
            completed: {
                0: true,
                1: false
            }
        };

    }

    onChange = event => {
        const { value, items } = event.target
        this.setState({
            [items]: value
        })
    };

    onCheckItem = (index, item) => {
        console.log('handle check item called', { item })
        const { completed } = this.state;
        // completed[index] = !completed[index]; 
        completed = !completed;
        this.setState(state => ({
            completed: { ...state.completed, [index]: !state.completed[index] }
        }));
        // this.setState({
        //     completed: !this.state.completed
        // })
    }

    componentDidMount() {

        // const item = {
        //     id: this.state.id,
        //     item: this.state.item,
        //     completed: false,
        // }


        let getCollectionByUserId = `https://fly-smart-api.herokuapp.com/api/checklist`;
        //  ${TokenService.getUserId()};

        fetch(getCollectionByUserId)
            .then((response) => response.json())
                // console.log(response)
            .then((data) => {
                console.log(data)
                this.setState({
                    checklist: data,
                });
            })
            .catch((error) => console.log(error));
    }




render() {

    const myChecklist = this.state.checklist.map(({item}, index) => {
        console.log(this.state.checklist);

        return (
            <ul className="checklist-item">
                <li
                    style={{
                        textDecoration: this.state.completed[index]
                            ? "line-through"
                            : ""
                    }}
                    key={index}>
                    <input id="chk" type="checkbox" name="item" onChange={() => this.onCheckItem(index, item)} />

                    <label htmlFor="item">{item}</label>
                </li>
            </ul>
        );
    });


    return (
        <div>
            <section className="checklist">
                <Navbar />
                <h2 className="">Checklist</h2>
                <h3>Check what you have ready to pack:</h3>

                <form>
                    <fieldset>
                        {myChecklist}
                        {/* 
                            <legend>All travelers: </legend><br />
                            <input type="checkbox" name="item" value="passport" completed />
                            <label htmlFor="item"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="visa" />
                            <label htmlFor="item-3"> I have my visa</label><br /> */}
                    </fieldset>

                    {/* <fieldset>
                            <legend>Travelers with babies: </legend><br />
                            <input type="checkbox" name="item-1" value="pacifier" />
                            <label htmlFor="item-1"> I have the pacifier</label><br />
                            <input type="checkbox" name="item-2" value="blanket" />
                            <label htmlFor="item-2"> I have an extra blanket</label><br />
                            <input type="checkbox" name="item-3" value="visa" completed />
                            <label htmlFor="item-3"> I have my visa</label><br /><br />
                        </fieldset>

                        <fieldset>
                            <legend>Elderly travelers: </legend><br />
                            <input type="checkbox" name="item-1" value="passport" />
                            <label htmlFor="item-1"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" completed />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="meds" />
                            <label htmlFor="item-3"> I have my meds</label><br />
                        </fieldset>


                        <fieldset>
                            <legend>Group travelers: </legend><br />
                            <input type="checkbox" name="item-1" value="passport" completed />
                            <label htmlFor="item-1"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="visa" />
                            <label htmlFor="item-3"> I have hotel info</label><br />
                        </fieldset> */}
                </form>
            </section>
        </div >
    );
}

}

export default Checklist;