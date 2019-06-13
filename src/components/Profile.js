import React, { Component } from 'react';
import logo_image from '../images/logo-wess.png';
import {timerBreakdown} from '../Functions';

class Profile extends Component {

    state = {
        dateTime: timerBreakdown(new Date())
    };

    tick_tock = () => this.setState({dateTime: timerBreakdown(new Date())});

    componentDidMount = () => this.tickInterval = setInterval(() => this.tick_tock(), 1000);

    componentWillUnmount = () => clearInterval(this.tickInterval);

    render() {
        return (
                <header className="Profile">
                    <div className="row">
                        <div className="col d-flex flex-row justify-content-between">
                            <img src={logo_image} alt="WessCoby's Logo" className="logo-img mr-2"/>
                            <div>
                                <p className="time-display text-fira-code mb-0">{this.state.dateTime.getTimeNow()}</p>
                                <p className="date-display text-fira-sans">{this.state.dateTime.getFullDate()}</p>
                            </div>
                        </div>
                    </div>
                </header>
        );
    }
}
export default Profile;