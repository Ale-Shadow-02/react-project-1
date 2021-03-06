import React, {Component} from "react";
import styled from "styled-components";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// const Button = styled.button`
//   padding: 15px;
//   margin-right: 10px;
//   background-color: ${props => props.bgColor};
//   text-align: center;
// `;


export default class Avatar extends Component {
  render() {

    return (
        <div className="box">
          {this.props.name ? <p>{this.props.name.charAt(0)}</p> : <img src="./Group1.svg" alt="img"/>}
          {/*<Button bgColor="red">OK</Button>*/}
          {/*<Button bgColor="green">NOK</Button>*/}
          <Button size={50}>Default</Button>
          <Button type="dashed" size={50}>GGGGGGGG</Button>

        </div>
    )
  }
}