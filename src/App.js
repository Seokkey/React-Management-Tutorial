import React, { Component } from 'react';
import Customer from './components/Customer'
import Clock from './components/Clock'
import ClockControl from './components/ClockControl'
import ApiExample from './components/ApiExample'
import EventHandling from './components/EventHandling'

import './App.css';

class App extends Component { //Component : 웹 문서에서 어떠한 내용을 보여주기 위한 기본적인 단위 Component는 계층적으로 구성되어 있기때문에 하나의 Component가 다른 Component안에 들어갈 수 있음
  render(){

    return (
      <div>
        <Customer></Customer>        







        
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>ㅡㅡㅡㅡㅡㅡㅡ기본 예제ㅡㅡㅡㅡㅡㅡㅡ</p>        
        <Clock></Clock>
        <ClockControl></ClockControl>
        <ApiExample></ApiExample>
        <EventHandling></EventHandling>
      </div>
    );

  }
  
}

export default App;
