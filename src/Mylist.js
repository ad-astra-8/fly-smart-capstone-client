import React, { Component } from "react";
import Navbar from "./Navbar";

class Mylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: [],
        };
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // componentDidMount() {
    //     let getCollectionByUserId = `https://keto-diet-api.herokuapp.com/api/notes`;
    //     //  /${TokenService.getUserId()}`;

    //     fetch(getCollectionByUserId)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             this.setState({
    //                 folderList: data,
    //             });
    //         })
    //         .catch((error) => alert(error));
    // }

    // MylistFilterOnChange = (event) => {
    //     this.setState({
    //         inputValue: event.target.value,
    //     });
    // };

    // handleTabClick = (note_folder_id) => {
    //     this.setState({ currentTabIndex: note_folder_id });
    // };

    // renderButtons() {
    //     const currentButton = Object.entries(this.state.tabs).map(
    //         ([key, value]) => {
    //             let id = parseInt(key);

    //             return (
    //                 <button
    //                     className="tab"
    //                     key={id}
    //                     type="button"
    //                     onClick={() => this.handleTabClick(id)}
    //                 >
    //                     {value}
    //                 </button>
    //             );
    //         }
    //     );
    //     return currentButton;
    // }

    // renderContent() {
    //     const currentTab = this.props.tabs.map((tab, index) => {
    //         if (this.state.currentTabIndex === tab.note_folder_id) {

    //             return (
    //                 <div key={index}>
    //                     <h2 className="content-title">{tab.name}</h2>
    //                     <div className="content"><p className="content-p">{tab.content}</p></div>
    //                 </div>
    //             );
    //         } else {

    //             return null;
    //         }

    //     });
    //     return currentTab;
    // }

    // renderTitle() {
    //     const currentTitle = this.props.tabs[this.state.currentTabIndex];

    //     return currentTitle && <h2>{currentTitle.name}</h2>;
    // }

    render() {
        // const filteredMylist = this.state.folderList.filter((tab) => {
        //     let content = tab.content
        //         .toLowerCase()
        //         .includes(this.state.inputValue.toLowerCase());
        //     let title = tab.name
        //         .toLowerCase()
        //         .includes(this.state.inputValue.toLowerCase());
        //     return content || title;
        // });
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        return (
            <div>
                <Navbar />
                <section class="my-list">

                    <h2 class="forum">Create your own list</h2>
                    <form className="Mylist-form">
                        <label for="search-term">Add your personal items:</label>
                        <input type="input" name="search" id="search-term" value="" placeholder="Bring ipad" />
                        <button type="submit" id="submit-keyword">Add</button>
                        <p className="error-message">please enter an item</p>
                        <p className="error-message">sorry, something went wrong</p>


                        <h3>My list:</h3>
                        <h4>Thing one:</h4>
                        <p class="lorem">"Lorem ipsum dolor sit amet."</p>

                        <h4>Thing two:</h4>
                        <p class="lorem">"Anim id est laborum."</p>

                        <h4>Thing three:</h4>
                        <p class="lorem">"Ut enim ad minim veniam."</p>
                    </form>
                </section>

                {/* <fieldset className="search-div">
              <label className="search-label" htmlFor="search-term">
                Enter a keyword of your choice:
              </label>
              <input
                className="search-input"
                type="text"
                value={this.state.inputValue}
                onChange={this.MylistFilterOnChange}
                id="search-term"
                placeholder="enter keyword"
              />
            </fieldset>
            <div className="postResults">
              <h2>Results matching your specific search:</h2>
              {this.state.inputValue &&
                filteredMylist.map(({ name, content, }, index) => (
                  <div key={index} className="searchTerm-results">
                    <h2>{name}</h2>
                    <p className="content-p">{content}</p>
                  </div>

                ))}
            </div>

            <div className="tabsContainer">
              <p className='intro'>Click on a tab and search posts per topics!</p>

              {this.renderButtons()}
              {!!this.state.folderList.length && this.renderContent()}

            </div> */}

            </div>
        );
    }
}

export default Mylist;
