import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Your Profile</h1>
                {this.props.user}
                {/* Display user information */}
                {/* Display log of user's past logs  */}
            </div>
        )
    }
}

export default Profile
