const express = require('express'); //express 불러오기
const bodyParser = require('body-parser'); //서버 모듈을 위한 기능 선언
const app = express(); //서버 모듈을 위한 기능 선언
const port = process.env.PORT || 5000; //서버 포트번호 5000번으로 설정

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => { // api/hello 경로로 접속시 처리 내용
    res.send({message: 'Hello Express~!'}); // api/hello 경로로 접속시 Hello Express 출력
});

//실제 앱을 동작시키기 위해서 5000번 포트로 동작 시키고
//서버가 동작중이면 동작중이라고 출력
// `` 은 쿼트가 아니라 숫자 1 옆에 붙어있는 특수 문자. 이걸로 해야 문자열 안에 변수를 출력 가능
app.listen(port, () => console.log(`Listening on port ${port}`)); 
