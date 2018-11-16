import React, { Component } from 'react';
import logo_image from '../images/logo-wess.png';

class Profile extends Component {

    state = {
        dateTime: new Date().toLocaleString()
    };

    render() {
        return (
                <header className="Profile">
                    <p>Profile</p>
                </header>
        );
    }
}
export default Profile;