import React from 'react';
import { post } from 'axios'; //post 방식으로 서버로 보낼 수 있도록 axios에서 post 라이브러리 추가
class CustomerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: null, //byte 형
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '' //파일 이름
        }
    }

    addCustomer = () => {
        console.log("Customer.addCustomer() 실행");
        const url = '/api/customers'; //데이터를 보낼 API 주소
        const formData = new FormData(); //FormData객체를 이용해 서버로 데이터를 보냄
        formData.append('image', this.state.file); //byte 데이터를 image로 전송
        formData.append('userName', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        //파일이 포함되어 있는 어떠한 데이터를 서버로 전송하고자할 때는 웹 표준에 맞는 헤더를 추가해줘야 함
        //전달하고자 하는 데이터에 파일이 포함되어 있다고 'content-type': 'multipart/form-data' 를 명시해줘야함
        const config = { 
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config); //axios의 post 라이브러리를 이용해서 formData를 config환경설정에 맞게 데이터를 리턴해줌
    }

    handleFormSubmit = (e) =>{ //Submit 이벤트 함수
        console.log("추가하기 클릭 Customer.handleFormSubmit() 실행");                
        e.preventDefault(); //데이터가 서버로 전달됨에 있어서 오류가 발생하지 않도록
        this.addCustomer()
            .then((response) => {
                console.log(response);
            });
        this.setState({
            file: null, //byte 형
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '' //파일 이름
        });
        window.location.reload(); //테스트를 위함이지 실제 이렇게 전체 새로고침하면 안됨    
    }

    handleFileChange = (e) => {
        console.log("파일 state 변환 Customer.handleFileChange() 실행");                
        this.setState({
            file: e.target.files[0], //여러 파일 중에서 첫번째 파일만 state 변경
            fileName: e.target.value
        });
    }

    handleValueChange = (e) => {
        console.log("state 변환 Customer.handleValueChange() 실행");                
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    render(){
        console.log("Customer.render() 실행"); 
        return(
            <form onSubmit={this.handleFormSubmit}> 
                <h1>고객 추가</h1> 
                프로필 이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                <br />
                이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} />
                생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} />
                성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
                직업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} />
                <button type="submit">추가하기 </button>
            </form>

        )
    }

    /**
     * 1. 추가하기 누르면 handleFormSubmit() 실행
     * 2. handleFormSubmit() -> addCustomer() 실행
     * 3. FormData 에 작성한 데이터 담아서 /api/customers, 데이터, 헤더형식  post로 리턴
     * 4. 
     * 
     *  */

}

export default CustomerAdd
