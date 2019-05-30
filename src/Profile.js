import React, { Component } from 'react'
import firebase from 'firebase';
import './Profile.css'
import List from './List.js'

const usersRef = firebase.database().ref('users');
var styles1 = {
    //paddingTop:50,
    //paddingLeft:400,
    //display: 'flex',
    //justifyContent: 'center',
    paddingTop: 50,
    textAlign: 'center'
    
  };

export class Profile extends Component {
constructor(props){
    super(props);
    this.state = {

        user : this.props.user,
        title: "",
        text:'',
        array: [],
    }
}

componentDidMount(){
this.display()

}
display=async ()=>{
    

   // let returnArr =[];
    //console.log(title);
    //console.log(text);
    let returnArr=[]
    usersRef.orderByChild('email').equalTo(this.state.user).on("value", function(snapshot) {

     snapshot.forEach((function(child) { console.log(child.key) ;
     console.log(child.val().email);
     console.log(child.val().title);
     console.log(child.val().text);
     let title = child.val().title;
     let text = child.val().text;
     let littleArr = [title, text];
    returnArr.push(littleArr)
    

}))


console.log(returnArr)



});
//if(returnArr.length!=0){
//this.setState({array: returnArr}, ()=> console.log(this.state.array))}
var timeout = setInterval(()=>
{ if(returnArr.length!==0) { clearInterval(timeout); console.log(returnArr); 
    this.setState({array: returnArr}, ()=> console.log(this.state.array))
} }, 100);
}

setResults =async (arr)=>{
    console.log(arr);
    this.setState({array: arr}, ()=> console.log(this.state.array))
}


    render() {
        if(this.state.array.length===0){
        return (
            <div>
               <h1 style = {styles1} >Profile</h1>
               <div className ="user"><p>{this.state.user}</p></div>
              <div className="header"> Activity Log </div>
               <div className="blank">No activities logged yet. Start working!</div> 
                {/* Display user information */}
                {/* Display log of user's past logs  */}
            </div>
        )
        }
        else{
            return(
                <div>
                <h1 style = {styles1} >Profile</h1>
                <div className ="user"><p>{this.state.user}</p></div>
                <div className="header"> Activity Log </div>
                 <List arr = {this.state.array}/>
                </div>




            )
        }
    }
}

export default Profile
