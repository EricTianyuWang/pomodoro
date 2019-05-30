



import React from "react";
import { List, Avatar } from 'antd';
import './List.css'


export default class Display extends React.Component {
  state = {

    arr: this.props.arr,
    
  };
  

render(){


    return(


        <div className="list">
 <List
    itemLayout="horizontal"
    dataSource={this.state.arr}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          //avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={item[0]}
          description={item[1]}
        />
      </List.Item>
    )}
  />,




        </div>

    )
}
}
  

//   render() {
//       console.log(this.props.arr)
  
//     return (
//       <div>
        
// {this.state.arr.map(entry => (
//     <li> {entry[0]} {entry[1]}  </li>
//   ))}
//       </div>
//     );
//   }


