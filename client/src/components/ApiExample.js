import React, { Component } from 'react';

class ApiExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        };
    }

    callApi = () =>{ //API 호출
        fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch함수로 해당 API에 접속
        .then(response => response.json()) //건너온 데이터를 response로 받고 response를 json()형태로 데이터 받음
        .then(json => { //json 형태의 데이터를 setState로 data의 state값을 변경
            this.setState({
                data: json.title //data의 값을 json.title 값으로 변경
            });
        });
    }

    componentDidMount(){ //특정한 API를 호출할 때는 componentDidMount()에서 불러온다
        this.callApi(); //componentDidMount()함수가 클래스 내부에 정의되어 있기때문에 반드시 this를 사용해야함
    }
 
    render(){ //render() 가 componentDidMount() 보다 먼저 실행되기 때문에 data가 비어 있을 때와 data가 API를 통해 불러온 다음을 각각  명시해 줘야함.
        return(
            <div>
                <h3>
                    {this.state.data? this.state.data : '데이터 불러오는 중입니다.'}
                </h3>
                
            </div>
        );
    }
}

export default ApiExample;