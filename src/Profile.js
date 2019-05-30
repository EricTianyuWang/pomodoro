import React, { Component } from 'react'
import firebase from 'firebase';

export class Profile extends Component {
constructor(props){
    super(props);
    this.state = {

        user : this.props.user,
    }
}

// componentDidMount(){
// this.display();

// }
// display=()=>{
//     const usersRef = firebase.database().ref('users');
// let user ="";
// let email=""
// usersRef.orderByChild('email').equalTo(this.state.user).on("value", function(snapshot) {
//   snapshot.forEach((function(child) { console.log(child.key) ;
//     user = child.key;
    
//    firebase.database().ref('users/'+child.key+'/text').set({"Activity":"What I did"})
//       var updates = {};
//      updates['users/' + child.key +'/'+child.val().email] = {jkhd: 'sometextqwd'};
     
    
      

// }))
// });

// }


    render() {
        return (
            <div>
                <h1>Your Profile</h1>
                {this.state.user}
                {/* Display user information */}
                {/* Display log of user's past logs  */}
            </div>
        )
    }
}

export default Profile
