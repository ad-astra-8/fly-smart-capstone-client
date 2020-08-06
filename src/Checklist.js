import React, { Component } from 'react';
import Navbar from "./Navbar";



class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        };
    }

    updateCompleted = (completed) => {
        this.setState({
            completed: {
                value: completed,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { title, completed } = e.target;
        const note = {
            title: title.value,
            completed: completed.value,
        };
    }

    render() {


        return (
            <div>
                <section className="checklist">
                    <Navbar />
                    <h2 className="">Checklist</h2>
                    <h3>Check what you have ready to pack:</h3>

                    <form action="/action_page.php">
                        <fieldset>
                            <legend>All travelers: </legend><br />
                            <input type="checkbox" name="item" value="passport" checked />
                            <label htmlFor="item"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="visa" />
                            <label htmlFor="item-3"> I have my visa</label><br />
                        </fieldset>

                        <fieldset>
                            <legend>Travelers with babies: </legend><br />
                            <input type="checkbox" name="item-1" value="pacifier" />
                            <label htmlFor="item-1"> I have the pacifier</label><br />
                            <input type="checkbox" name="item-2" value="blanket" />
                            <label htmlFor="item-2"> I have an extra blanket</label><br />
                            <input type="checkbox" name="item-3" value="visa" checked />
                            <label htmlFor="item-3"> I have my visa</label><br /><br />
                        </fieldset>

                        <fieldset>
                            <legend>Elderly travelers: </legend><br />
                            <input type="checkbox" name="item-1" value="passport" />
                            <label htmlFor="item-1"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" checked />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="meds" />
                            <label htmlFor="item-3"> I have my meds</label><br />
                        </fieldset>


                        <fieldset>
                            <legend>Group travelers: </legend><br />
                            <input type="checkbox" name="item-1" value="passport" checked />
                            <label htmlFor="item-1"> I have my passport</label><br />
                            <input type="checkbox" name="item-2" value="sanitizer" />
                            <label htmlFor="item-2"> I have my 3 oz hand sanitizer</label><br />
                            <input type="checkbox" name="item-3" value="visa" />
                            <label htmlFor="item-3"> I have hotel info</label><br />
                        </fieldset>
                    </form>
                </section>
            </div>
        );
    }

}

export default Checklist;