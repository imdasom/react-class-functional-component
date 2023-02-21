import React, { Component } from 'react';
import './ClassComponent.css';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timer: 60,
      image: '',
    };
  }

  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      })
    }, 1000);

    const that = this;
    fetch('https://image.wconcept.co.kr//productimg/image/img0/95/300889295_UW17813.jpg')
      .then(data => data.blob())
      .then(blob => new Promise(callback => {
        let reader = new FileReader();
        reader.onload = function () {
          that.setState({
            image: this.result
          })
        };
        reader.readAsDataURL(blob);
      }));
  }

  render() {
    return (
      <div className={'container'}>
        <img src={this.state.image} width={300}/>
        <div>{this.state.timer}초 남았습니다</div>
        <div>
          구매수량
          <button onClick={this.handleDecrease}>-</button>{this.state.count}<button onClick={this.handleIncrease}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;