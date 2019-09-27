import React, { Component } from 'react';

class EventHandling extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
    }

    /**
     * 바인드 하는 법
     *  자바스크립트는 바인딩 처리가 기본으로 처리하지 않기때문에
     *  특정한 변수를 변경하고자 할 때는 바인딩 처리를 꼭 해줘야 함. 
     * 1. handleClick = () => : 함수 자체에 바인드
     * 2. <button onClick={this.handleClick.bind(this)}> : 호출시 바인드
     * 3. this.handleClick = this.handleClick.bind(this) constructor에서 미리 바인드(동일한 작업을 여러군데에서 할 때 효과적)
     */
    
    handleClick = () => { // = () => 자동으로 바인딩 처리가 됨. 
        console.log("이벤트 처리");
        this.setState(state => ({
            isToggleOn: !this.state.isToggleOn //isToggleOn 변수의 값이 true면 false로 false면 true로 바꿈
        }));
    }
 
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}> {/* 버튼 클릭시 isToggleOn의 상태를 변화해줌 */}
                    {this.state.isToggleOn ? 'ON' : 'OFF'} {/* isToggleOn 이 true 면 ON, false면 OFF */}
                </button>                
            </div>
        );
    }
}

export default EventHandling;