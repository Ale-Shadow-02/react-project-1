import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #641c1c;
`;

const Button = styled.button`
  background: ${(props) => (props.active ? "#641c1c" : "#cccccc")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  padding: 10px 30px;
  cursor: pointer;
  transition: 0.6s;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 5px auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.6s;
  }
`;

export default class StyledTest extends React.Component {
  render() {
    return (
      <div>
        <TitleH1>Hello styled, i am Sasha Dvryadkin!!!!</TitleH1>
        <Button>Not Active</Button>
        <Button active>I am Active</Button>
      </div>
    );
  }
}
