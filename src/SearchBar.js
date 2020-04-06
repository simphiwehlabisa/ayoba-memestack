import React from "react";

const SearchBar = (props) => (
  <input
    type="text"
    placeholder="Search for gifs here"
    onKeyDown={props.searchGif}
  />
);

export default SearchBar;
