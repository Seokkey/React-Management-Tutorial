import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Clock from './components/Clock'
import ClockControl from './components/ClockControl'
import ApiExample from './components/ApiExample'
import EventHandling from './components/EventHandling'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3, //위쪽 여백을 3의 가중치 만큼 줌
    overflowX: 'auto' //x축으로 오버플로우가 발생할 수 있도록 처리
  },
  table:{
    minWidth: 1080 //테이블을 1080px 이상 출력하면 화면 크기가 줄어들어도 전체의 1080px 만큼 무조건 테이블이 자리 잡아서 가로 스크롤이 생김
  }
})


const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1', //any 이미지를 랜덤으로 가져옴 64*64 사이즈로 설정
  'name' : '홍길동',
  'birthday' : '880822',
  'gender' : '남자',
  'job' : '대학생',
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2', //이미지를 랜덤으로 가져옴 64*64 사이즈로 설정
    'name' : '김혜자',
    'birthday' : '640822',
    'gender' : '여자',
    'job' : '회사원',
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3', //이미지를 랜덤으로 가져옴 64*64 사이즈로 설정
    'name' : '최불암',
    'birthday' : '660822',
    'gender' : '남자',
    'job' : '선생님',
    },  
]

class App extends Component { //Component : 웹 문서에서 어떠한 내용을 보여주기 위한 기본적인 단위 Component는 계층적으로 구성되어 있기때문에 하나의 Component가 다른 Component안에 들어갈 수 있음
  
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Clock></Clock>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(c => { //map() 배열의 각각 원소에 어떠한 값을 적용하고 싶을 때 map이 각 원소를 순회하면서 c에 담음. 파이썬 문법과 동일
              console.log("map으로 c에 담은 데이터",c);
              return(              
                <Customer
                  // key={c.id} //map을 사용함에 있어서 각 원소를 구분할 수 있는 고유의 key 값이 있어야함
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                >                
                </Customer>
              )
              
            })
          }
          </TableBody>
        </Table>



{/* map을 사용하지 않을 경우 불필요하게 여러번 호출해야함
        <Customer //Customer 컴포넌트에 customer변수의 값 전달
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        >
        </Customer>
        <Customer //Customer 컴포넌트에 customer변수의 값 전달
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        >
        </Customer>
        <Customer //Customer 컴포넌트에 customer변수의 값 전달
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        >
        </Customer>         
*/}








        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>ㅡㅡㅡㅡㅡㅡㅡ기본 예제ㅡㅡㅡㅡㅡㅡㅡ</p>        
        
        <ClockControl></ClockControl>
        <ApiExample></ApiExample>
        <EventHandling></EventHandling>
      </Paper>
    );

  }
  
}

export default withStyles(styles)(App); //withStyles를 적용한 상태로 내보내기
