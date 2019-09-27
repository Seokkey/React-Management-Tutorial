const { Client } = require("pg"); //postgres 와 접속하기 위해 필요한 모듈
const fs = require('fs'); //파일을 읽기 위한 모듈
const express = require("express"); //express 불러오기
const bodyParser = require("body-parser"); //서버 모듈을 위한 기능 선언
const app = express(); //서버 모듈을 위한 기능 선언
const port = process.env.PORT || 5000; //서버 포트번호 5000번으로 설정
const data = fs.readFileSync('./database.json'); //./database.json 파일을 읽어옴
const conf = JSON.parse(data); //파일을 JSON 형식으로 파싱
const multer = require('multer'); //멀터 라이브러리가 파일이름을 겹치지 않게 설정해서 할당 해줌
const upload = multer({dest: './upload'}); //루트 폴더의 업로드 폴더를 사용자 사진 저장 공간으로 사용



console.log("여기는 언제 실행??? server.js 상단");





//쿼리 실행


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//일반적으로 리액트에서는 비동기통신을 이용해서 서버에 접근하여 데이터를 가져오도록 코딩
//5000번 포트를 API 서버로 사용하기 위해서 client/package.json에 "proxy": "http://localhost:5000/" 설정을 해 줘야 함 (react-scripts 버전이 2 이하일때!!)
//react-scripts 버전이 2 이상이면 별도로 yarn add http-proxy-middleware 설치 -> client/src/setupProxy.js 생성 후 proxy 설정을 해줘야함


// /api/customers 경로로 접속시 처리 내용
//res.send({message: "Hello Express~!"}); // api/customers 경로로 접속시 Hello Express 출력
//"image" : "https://placeimg.com/64/64/1", //any 이미지를 랜덤으로 가져옴 64*64 사이즈로 설정
app.get("/api/customers", (req, res) => { //get 방식으로 req,res 전달      
    //접속 정보 user : 유저이름, host: 주소, database: 데이터베이스 이름, password: 비번, port: 포트번호
    const client = new Client(conf); //JSON 데이터로 클라이언트 객체 생성 ※접속 시 마다 생성해 주어야 함※
    console.log("app.get : 여긴 언제 언제 실행?");
    client.connect(); //서버 접속
    console.log("app.get.connect() : 여긴 언제 언제 실행?");
    client.query('SELECT * FROM CUSTOMER', (err, queryRes) => {                      
        console.log("app.get.selectResult 내부에서 결과 값", queryRes);
        client.end();//접속 종료
        res.send(queryRes.rows);
    });
});

//사용자가 실제로 접근해서 프로필 이미지를 확인할 수 있도록 업로드 폴더 공유
//사용자가 /image라는 경로로 접근하면 서버의 /upload 폴더와 맵핑
app.use('/image', express.static('./upload')); 

//image라는 이름의 변수에 해당 이미지의 바이너리 데이터가 들어오면 upload.single('image') 그걸 받아옴
app.post('/api/customers', upload.single('image'), (req, res) => {
    const client = new Client(conf); //JSON 데이터로 클라이언트 객체 생성 ※접속 시 마다 생성해 주어야 함※
    
    console.log("app.post : 여긴 언제 언제 실행?");
    client.connect(); //서버 접속
    
    console.log("app.post.connect() : 서버접속");
    
    
    //데이터베이스에 해당 이미지가 존재하는 이미지 경로+파일 이름을 넣어줌

    let image = '/image' + req.file.filename; 
    console.log("image 경로 + 이름", image);
    const sql = "INSERT INTO CUSTOMER VALUES (default, ?, ?, ?, ?, ?)";
    const values = ['default', image, req.body.name, req.body.birthday, req.body.gender, req.body.job];
    
    client.query(sql, values, (err, queryRes, fields) => {                      
        console.log("app.post.query 에러", err);
        console.log("selectResult 내부에서 결과 값", queryRes);
        client.end();//접속 종료
        res.send(queryRes.rows);
    });
});


//실제 앱을 동작시키기 위해서 5000번 포트로 동작 시키고
//서버가 동작중이면 동작중이라고 출력
// `` 은 쿼트가 아니라 숫자 1 옆에 붙어있는 특수 문자. 이걸로 해야 문자열 안에 변수를 출력 가능
app.listen(port, () => console.log(`서버 가동중 Listening on port ${port}`)); 
