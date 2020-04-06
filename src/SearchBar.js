import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  width: 100%;
  background-color: #e9e9e9;
`;

const InputStyle = styled.input`
    width: 100%;
    padding: 6px;
    margin: 8px;
    font-size: 17px;
    border: none;
}
`;

const SearchBar = (props) => {
  return (
    <SearchBarContainer>
      <InputStyle
        type="text"
        onKeyDown={props.searchGif}
        placeholder={"Search memestack"}
      ></InputStyle>
    </SearchBarContainer>
  );
};

export default SearchBar;
