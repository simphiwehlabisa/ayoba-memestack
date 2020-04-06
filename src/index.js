// dc6zaTOxFJmzC

import React, { Component } from "react";
import { render } from "react-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./global.css";
import "typeface-roboto";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memes: [],
    };
  }

  search = (query) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then((response) => {
        this.setState({
          memes: response.data.data,
        });
        console.log(this.state.memes);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  searchMeme = (event, query) => {
    query = event.target.value;
    if (event.key === "Enter") {
      event.preventDefault();
      this.search(query);
    }
  };

  componentDidMount() {
    this.search("trending");
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar searchMeme={this.searchMeme}></SearchBar>
        <SearchResult memes={this.state.memes}></SearchResult>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
