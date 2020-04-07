// dc6zaTOxFJmzC
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./global.css";
import "typeface-roboto";
import fetchMemesAction from "./fetchMemes";
import { getMemesError, getMemes, getMemesPending } from "./reducer";
import Loading from "./loading";

class App extends Component {
  constructor() {
    super();
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
    this.state = {
      memes: [],
    };
  }

  componentWillMount() {
    const { fetchMemes } = this.props;
    fetchMemes();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;

    return true;
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

  sendMeme = (url) => {
    // Ayoba.sendMedia(url, "image/gif");
    // Ayoba.finish();
    // console.log(url);
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
    const { memes, error, pending } = this.props;

    if (!this.shouldComponentRender()) return <Loading />;

    return (
      <React.Fragment>
        <div className="app-wrapper">
          {error && <span className="app-error">{error}</span>}
        </div>
        <SearchBar searchMeme={this.searchMeme}></SearchBar>
        <SearchResult
          memes={this.state.memes}
          sendMeme={this.sendMeme}
        ></SearchResult>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getMemesError(state),
  memes: getMemes(state),
  pending: getMemesPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMemes: fetchMemesAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
