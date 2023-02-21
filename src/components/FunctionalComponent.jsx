import React, {useEffect, useState} from 'react';
import './FunctionalComponent.css';

export default function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(60);
  const [image, setImage] = useState('');
  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch('https://image.wconcept.co.kr//productimg/image/img0/95/300889295_UW17813.jpg')
      .then(data => data.blob())
      .then(blob => new Promise(callback => {
        let reader = new FileReader();
        reader.onload = function () {
          setImage(this.result);
        };
        reader.readAsDataURL(blob);
      }));
  }, []);


  useEffect(() => {
    setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [])

  return (
    <div className={'container'}>
      <img src={image} width={300}/>
      <div>{timer}초 남았습니다</div>
      <div>
        구매수량
        <button onClick={handleDecrease}>-</button>{count}<button onClick={handleIncrease}>+</button>
      </div>
    </div>
  )
}