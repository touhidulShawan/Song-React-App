import React, { Component } from "react";
import "./App.css";
import SongList from "../components/SongList";
import SongDetails from "../components/SongDetails";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container grid">
          <div className="ui row">
            <div className="column five wide">
              <SongList />
            </div>
            <div className="column five wide">
              <SongDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
