import React, {Component} from "react";

const numberBox = [
  {id: 1, value: -5},
  {id: 2, value: -2},
  {id: 3, value: 1},
  {id: 4, value: 2},
  {id: 5, value: 5}
];

class Counter extends Component {

  state = {
    res: 0,
    arr: [],
  };


  handelChecked = (e) => {
    this.setState({res: Number(e.target.innerHTML) + this.state.res},
      () => this.setState({arr: [...this.state.arr, Number(e.target.innerHTML)]}))
  };

  deleteBtn = (idDelete) => {
    const delArr = this.state.arr.filter((el, idx) => idDelete !== idx);
    const minus = this.state.arr[idDelete];
    this.setState({arr: delArr}, () => {this.setState({res: this.state.res - minus})})
  };



  render() {
    return (
      <div className="wrapper">
        <h1 className="count__title">Текущее значение счетчика: {this.state.res}</h1>
        <div className="wrap__count box">
          {numberBox.map((el,) => <button className="box__count" onClick={this.handelChecked} key={el.id} >{el.value}</button>)}
        </div>
        <ul>
          {this.state.arr.map((el, idx) => <li>{el}<button className="delete__btn" onClick={() => this.deleteBtn(idx)}>DELETE</button></li>)}
        </ul>
      </div>
    )
  }
}

export default Counter;