import React, { Component } from 'react'; //'react' 라이브러리에서 Component 라는 클래스를 로딩

class Customer extends Component{
    render(){
        return(
            <div>
                <h2>홍길동</h2>
                <p>890808</p>
                <p>남자</p>
                <p>학생</p>
            </div>
        )
        
    }
}

export default Customer;