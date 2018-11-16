import React, { Component } from 'react';
import logo_image from '../images/logo-wess.png';

class Profile extends Component {

    state = {
        dateTime: new Date().toLocaleString()
    };

    render() {
        return (
                <header className="Profile">
                    <div className="row">
                        <div className="col d-flex flex-row justify-content-between">
                            <img src={logo_image} alt="WessCoby's Logo" className="logo-img mr-2"/>
                            <div>
                                <p className="time-display text-fira-code mb-0">16:02:55</p>
                                <p className="date-display text-fira-sans">Friday, 16th November, 2018</p>
                            </div>
                        </div>
                    </div>
                </header>
        );
    }
}
export default Profile;