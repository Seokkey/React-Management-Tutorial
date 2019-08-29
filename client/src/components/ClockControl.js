import React, { Component } from 'react';

class ClockControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    goBack(){
        let nextDate = this.state.date; //현재시간 객체를 가져옴
        nextDate.setSeconds(nextDate.getSeconds() - 10); //현재 시간에서 10초 전으로
        this.setState({ //state 변경
            date: nextDate
        });
    }

    render(){
        return(
            <div>
                <h3>
                    현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.
                </h3>
                <button onClick={this.goBack.bind(this)}>10초 뒤로 가기</button>
            </div>
        )
    }
}

export default ClockControl;