import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick(){
        this.setState({
          date: new Date()  //date state 값을 새로운 new Date() 값으로 변경
        })
    }

    componentDidMount(){ //componentDidMount() : component가 초기화가 끝났을 때, 즉 mount가 끝났을 때 자동으로 불러와지는 함수
        this.timerID = setInterval(() => this.tick(), 1000); //이 컴포넌트 안에서 생성이 되어 있는 tick()를 1초에 한번씩 불러온다.
    }

    componentWillUnmount(){ //리소스 낭비를 없애기 위해서 컴포넌트가 언마운트 될 때, 즉 이용이 끝났을 때 clearInterval 사용
        clearInterval(this.timerID);
    }

    /** 
    * 1.컴포넌트가 처음 초기화가 끝났을 때 componentDidMount()가 실행 
    * 2.setInterval 함수가 1초에 한번씩 tick() 실행
    * 3.tick()이 date state 값을 변경. 
    */ 

    render(){
        return(
            <h3>
                현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.
            </h3>
        )
    }
}

export default Clock;