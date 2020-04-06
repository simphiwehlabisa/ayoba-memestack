import React from "react";
import styled from "styled-components";

const SearchResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MemeImageContainer = styled.div`
  width: 30vw;
`;

const SearchResult = (props) => {
  return (
    <SearchResultContainer>
      {props.gifs.map((gif, index) => {
        return (
          <MemeImageContainer key={index}>
            <img key={index} src={gif.images.fixed_height.url} alt={index} />
          </MemeImageContainer>
        );
      })}
    </SearchResultContainer>
  );
};

export default SearchResult;
