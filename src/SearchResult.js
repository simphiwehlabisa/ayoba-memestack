import React from "react";
import styled from "styled-components";

const SearchResultContainer = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;

  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MemeImageContainer = styled.div`
  margin: 30px auto;
  width: 300px;
  border-radius: 40px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  transition: 0.4s;
`;

const MemeImage = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  height: 300px;
`;

const SearchResult = (props) => {
  return (
    <SearchResultContainer>
      {props.gifs.map((gif, index) => {
        return (
          <MemeImageContainer key={index}>
            <MemeImage
              key={index}
              src={gif.images.fixed_height.url}
              alt={index}
            ></MemeImage>
          </MemeImageContainer>
        );
      })}
    </SearchResultContainer>
  );
};

export default SearchResult;
