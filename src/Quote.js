import React from 'react';
import axios from 'axios';
export default class App extends React.Component {

  state = {
    quote: "start"
  }

  componentDidMount() {
    this.callBackendAPI();
  }
    
	callBackendAPI = async () => {
      axios
      .get("http://localhost:9999/quote/")
      .then(res => {
        console.log("info" + res.data)
        this.setState({
          quote: res.data
        })
      })
      .catch(
        console.log('error')
      )
    };

    render() {
        return(
        <div>
          {this.state.quote}
        </div>
        );
    }
}
