const express = require("express"); //express 불러오기
const bodyParser = require("body-parser"); //서버 모듈을 위한 기능 선언
const app = express(); //서버 모듈을 위한 기능 선언
const port = process.env.PORT || 5000; //서버 포트번호 5000번으로 설정

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//일반적으로 리액트에서는 비동기통신을 이용해서 서버에 접근하여 데이터를 가져오도록 코딩
//5000번 포트를 API 서버로 사용하기 위해서 client/package.json에 "proxy": "http://localhost:5000/" 설정을 해 줘야 함 (react-scripts 버전이 2 이하일때!!)
//react-scripts 버전이 2 이상이면 별도로 yarn add http-proxy-middleware 설치 -> client/src/setupProxy.js 생성 후 proxy 설정을 해줘야함


// /api/customers 경로로 접속시 처리 내용
//res.send({message: "Hello Express~!"}); // api/customers 경로로 접속시 Hello Express 출력
//"image" : "https://placeimg.com/64/64/1", //any 이미지를 랜덤으로 가져옴 64*64 사이즈로 설정
app.get("/api/customers", (req, res) => { 
    
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "홍길동",
            "birthday": "880811",
            "gender": "남자",
            "job": "대학생"
        },
        {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "김혜자",
            "birthday": "640822",
            "gender": "여자",
            "job": "회사원"
        },
        {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "최불암",
            "birthday": "660822",
            "gender": "남자",
            "job": "선생님"
        }
    ]);
});

//실제 앱을 동작시키기 위해서 5000번 포트로 동작 시키고
//서버가 동작중이면 동작중이라고 출력
// `` 은 쿼트가 아니라 숫자 1 옆에 붙어있는 특수 문자. 이걸로 해야 문자열 안에 변수를 출력 가능
app.listen(port, () => console.log(`서버 가동 Listening on port ${port}`)); 
