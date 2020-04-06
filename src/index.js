// dc6zaTOxFJmzC

import React, { Component } from "react";
import { render } from "react-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchResult from "./SearchResult";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  xmlhr = (query) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
      )
      .then((response) => {
        this.setState({
          gifs: response.data.data,
        });

        console.log(this.state.gifs);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  searchGif = (event, query) => {
    query = event.target.value;

    if (event.key === "Enter") {
      event.preventDefault();

      this.xmlhr(query);
    }
  };

  render() {
    return (
      <div>
        <SearchBar searchGif={this.searchGif} />
        <SearchResult gifs={this.state.gifs} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
