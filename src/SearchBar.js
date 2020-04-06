import React from "react";
import styled from "styled-components";
import { Search } from "react-feather";
const SearchBarContainer = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  padding: 10px;
  display: flex;
`;

const InputStyle = styled.input`
    padding: 8px;
    font-size: 17px;
    border: none;
    font-weight: bold;
}
`;

const ButtonStyle = styled.button`
  float: right;
  padding: 6px 10px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  width: 100px;
`;

const SearchBar = (props) => {
  return (
    <SearchBarContainer>
      <InputStyle
        type="text"
        onKeyDown={props.searchMeme}
        placeholder={"Search memestack"}
      ></InputStyle>

      <ButtonStyle>
        <Search />
      </ButtonStyle>
    </SearchBarContainer>
  );
};

export default SearchBar;
