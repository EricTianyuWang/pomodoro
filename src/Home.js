
import ReactDOM from 'react-dom';
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import firebase from 'firebase';
import firebaseConfig from './firebase.js';
import Routing from './Routing.js';
import './Home.css';
import pomodoro from './pomodoro.png';


const FormItem = Form.Item;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            submitted: false,
            email:"",
            pass:"",
            message:"",
            isLoggedIn: false,

        }
    }

  handleSignIN=(e)=> {
    this.setState({message: ""});
    e.preventDefault();
    
    // const usersRef = firebase.database().ref("users")
    // let user={
    //   email: this.state.email,

    // }
    // usersRef.push(user)
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const auth = firebase.auth();
        
        const promise = auth.signInWithEmailAndPassword(values.userName, values.password);
        promise.then((result)=>{

          this.setState({submitted: true})
        },
        (error)=>{
          (this.setState({message: error.message}));
        })
      }
    });
    console.log(this.state.email);
    console.log(this.state.pass);
    //this.checkingUser();

    
  }

  handleSignUP = (e) =>
  {
    this.setState({message: ""});

    e.preventDefault();
    
    const usersRef = firebase.database().ref("users")
    let user={
      email: this.state.email,
      pass: this.state.pass,
    }
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(values.userName, values.password);
        promise.then((result)=>{

          this.setState({submitted: true})
          //usersRef.push(user)
        },
        (error)=>{
          (this.setState({message: error.message}));
        })
      }
    });

    console.log(this.state.email);
    console.log(this.state.pass);
    this.checkingUser();


  }
checkingUser =()=>{
firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser){
  console.log(firebaseUser);
  this.setState({isLoggedIn: true})

}
else{
  console.log('not logged in')
  this.setState({isLoggedIn: false})
}

})

}

  handleEmail = (event) => {
    this.setState({email: event.target.value})

}

handlePassword = (event) => {
  this.setState({pass: event.target.value})

}

  render() {

//console.log(this.state.isLoggedIn)
    const formItemLayout =
      
    {
       labelCol: { span: 4 },
       wrapperCol: { span: 14 },
     }
    const { getFieldDecorator } = this.props.form;
    if(!this.state.submitted){
    return (
      <div class = "landingPage">
          <h1 class = "welcomeMessage">Pomodoro Timer <img src={pomodoro} width="10%" height="10%"/></h1>
          <div className="pom"></div>
          <h1>Please Login Here!</h1>
          <Form inline onSubmit={this.handleSubmit}>
          <h2><FormItem {...formItemLayout}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="Username" onChange ={this.handleEmail} />
            )}
          </FormItem></h2>
          <h2><FormItem {...formItemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" onChange={this.handlePassword}/>
            )}
          </FormItem></h2>
        
          <div className="signIn">
            <FormItem>
              <Button type="primary" htmlType="submit" onClick={this.handleSignIN}>Sign in</Button>
            </FormItem>
          </div>

          <div className="signUp">
            <FormItem>
              <Button type="primary" htmlType="submit" onClick={this.handleSignUP}>Sign up</Button>
            </FormItem>
        </div>      
      </Form>
      {this.state.message}

     
      </div>
      
        )
    }
    else{
        return(

            <div>

            <Routing email = {this.state.email}/>


            </div>
        )

    }
}

}

export default Form.create()(Home);

