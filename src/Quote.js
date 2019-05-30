import React from 'react';

export default class App extends React.Component {
    
	callBackendAPI = async (title) => {
        axios
        .get("/quote/" + title)
        .then(res => {
          this.setState({
                    author: res.data
                })
        })
      };

    render() {
        return(


        <div>
        {this.callBackendAPI()}
        </div>

        );
    }
}
