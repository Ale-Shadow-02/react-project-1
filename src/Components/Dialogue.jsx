import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: #e6caca;
  padding: 20px;
  position: relative;
`;

const Button = styled.button`
  color: #fff;
  background-color: #0c30cf;
  margin: 0px 10px 0px 0px;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    background-color: #496ee9;
  }
  &::last-child {
    margin: 0px 0px 0px 0px;
  }
`;

const TextModal = styled.p`
  color: #ffffff;
  margin: 20px 0px 80px 0px;
  font-size: 20px;
`;

const WrapModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.753);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 111;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const Input = styled.input`
  padding: 10px;
  margin: 0px 0px 30px 0px;
`;

export default class Dialogue extends Component {
  state = {
    value: "",
    isActive: false,
  };

  clearBtn = (event) => {
    if (this.state.value !== "") {
      this.setState({ isActive: true });
    }
  };

  hendleInput = (event) => {
    this.setState({ value: event.target.value });
  };

  okBtn = () => {
    this.setState({ value: "", isActive: false });
  };

  nokBtn = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.hendleInput}
        />
        <Button onClick={this.clearBtn}>Очистить</Button>
        <WrapModal active={this.state.isActive ? "block" : ""}>
          <TextModal>Вы уверены, что хотите стереть текст?</TextModal>
          <Button onClick={this.okBtn}>OK</Button>
          <Button onClick={this.nokBtn}>Отмена</Button>
        </WrapModal>
      </Wrapper>
    );
  }
}
