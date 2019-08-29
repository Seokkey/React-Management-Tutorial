import React, { Component } from 'react'; //'react' 라이브러리에서 Component 라는 클래스를 로딩
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const STYLE = {
    display: {
        display: 'inline'
    }
};

class Customer extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>

            </TableRow>            
        )
        
    }
}

/**
 * 처리해서 보여줘야할 데이터가 많을 경우 컴포넌트를 계층적으로 분리하는 것이 좋다.
 * 컴포넌트를 계층적으로 분리하면 관리하기가 쉬워지며 생산성 또한 높아진다.
 * 
class CustomerProfile extends Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"></img>
                <br />
                <h2 style={STYLE.display} > {this.props.name}</h2> 님 (id : {this.props.id})
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return(
            <div>                
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
 *   */


export default Customer;