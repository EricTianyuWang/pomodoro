import React, { Component } from 'react'
import firebase from 'firebase';

const usersRef = firebase.database().ref('users');

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
                <h1>Profile</h1>
               <p> {this.state.user}  </p>

                {/* Display user information */}
                {/* Display log of user's past logs  */}
            </div>
        )
        }
        else{
            return(
                <div><h1>Profile</h1>
                <p>{this.state.user}</p>
                 {this.state.array.map(entry => (
                    <li> {entry[0]} {entry[1]}  </li>
                  ))}
                </div>




            )
        }
    }
}

export default Profile
